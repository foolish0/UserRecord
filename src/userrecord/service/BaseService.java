package userrecord.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.persistence.EntityManager;

import cn.windfly.util.BeanUtil;
import cn.windfly.util.JpaEntityBase;
import cn.windfly.util.LogUtil;
import cn.windfly.util.MapUtil;
import cn.windfly.util.PageBarUtil;
import cn.windfly.util.ValidateUtil;
import cn.windfly.util.bean.TypeMap;
import cn.windfly.util.exception.MessageException;
import userrecord.controller.vo.ConstantBean;
import userrecord.entity.OrganizationEntity;

public abstract class BaseService {
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	protected String getWhereJpqlFromAndLikeMap(Map likeMap, Map paraMap) {
		String where = " 1=1 ";
		if (ValidateUtil.isEmpty(likeMap)) {
			return where;
		}
		Set<Map.Entry>  entrySet = likeMap.entrySet();
		Iterator iterator = entrySet.iterator();
		while (iterator.hasNext()) {
			Map.Entry next = (Entry) iterator.next();
			if (next.getKey().toString().startsWith("_")) {
				iterator.remove();
			}
		}
		
		
		entrySet = likeMap.entrySet();
		for (Entry entry : entrySet) {
			if (ValidateUtil.isNotEmpty(entry.getValue())) {
				where += " and o." + entry.getKey() + " like :" + entry.getKey();
				paraMap.put(entry.getKey(), "%" + entry.getValue() + "%");
			}
		}
		return where;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public <T> T getByEqualAnd(Class<T> cls, Map map) {
		String s = "select o from " + cls.getSimpleName() + " o where 1=1 ";
		Set<Map.Entry> entrySet = map.entrySet();
		Map params = MapUtil.toMap();
		for (Entry mapEntry : entrySet) {
			s += " and o." + mapEntry.getKey() + " = :" + mapEntry.getKey();
			params.put(mapEntry.getKey(), mapEntry.getValue());
		}
		T t = (T)JpaEntityBase.selectJpqlOne(s, params);
		return t;
	}

	@SuppressWarnings({ "unchecked", "rawtypes"})
	public <T> PageBarUtil<T> listJpaEntityLike(Class<T> cls, Map<String, String> kvMap, int page, int rows) {
		JpaEntityBase entity;
		try {
			entity = (JpaEntityBase) cls.newInstance();
			String where = " 1=1 ";
			HashMap map = new HashMap<>();
			if (kvMap != null) {
				Set<Entry<String, String>>  entrySet = kvMap.entrySet();
				Iterator iterator = entrySet.iterator();
				while (iterator.hasNext()) {
					Map.Entry next = (Entry) iterator.next();
					if (next.getKey().toString().startsWith("_")) {
						iterator.remove();
					}
				}
				
				entrySet = kvMap.entrySet();
				for (Object object : entrySet) {
					Map.Entry<String, String> entry = (Entry<String, String>) object;
					if (ValidateUtil.isNotEmpty(entry.getValue())) {
						where += " and o." + entry.getKey() + " like :" + entry.getKey() + "";
						map.put(entry.getKey(), "%" + entry.getValue() + "%");
					}
				}
			}
			entity.setPageCondition(where + " order by o.id desc", map, PageBarUtil.getPageIndex(page, rows), rows);
			return entity.selectPageBarUtil();
		} catch (InstantiationException | IllegalAccessException e) {
			LogUtil.error(e);
		}
		return new PageBarUtil<>();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public <T> PageBarUtil<T> listJpaEntity(Class<T> cls, String where, Map paramMap, int page, int rows) {
		JpaEntityBase entity;
		try {
			entity = (JpaEntityBase) cls.newInstance();
			String where1 = "";
			if (ValidateUtil.isNotEmpty(where)) {
				where1 += " " + where;
			}
			if (paramMap == null) {
				paramMap = new HashMap();
			}
			Set entrySet = paramMap.entrySet();
			Iterator iterator = entrySet.iterator();
			while (iterator.hasNext()) {
				Map.Entry next = (Entry) iterator.next();
				if (next.getKey().toString().startsWith("_")) {
					iterator.remove();
				}
			}
			
			entity.setPageCondition(where1, paramMap, PageBarUtil.getPageIndex(page, rows), rows);
			return entity.selectPageBarUtil();
		} catch (InstantiationException | IllegalAccessException e) {
			LogUtil.error(e);
		}
		return new PageBarUtil<>();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public <T> T saveJapEntity(Class<T> cls, TypeMap paramsMap) throws MessageException {
		JpaEntityBase entity;
		try {
			entity = (JpaEntityBase) cls.newInstance();
			BeanUtil.mapToBeanFiedls(paramsMap, entity, true);
			paramsMap.remove("id");
			entity.save();
		} catch (InstantiationException | IllegalAccessException e) {
			LogUtil.error(e);
			throw new MessageException(ConstantBean.MESSAGE_SERVER_ERROR);
		}
		return (T) entity;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public <T> T updateJapEntity(Class<T> cls, long id, TypeMap paramsMap) throws MessageException {
		JpaEntityBase entity;
		try {
			entity = (JpaEntityBase) cls.newInstance();
			entity = (JpaEntityBase) entity.selectByPk(id);
			paramsMap.remove("id");
			BeanUtil.mapToBeanFiedls(paramsMap, entity, true);
			entity = (JpaEntityBase) entity.saveOrUpdate();
		} catch (InstantiationException | IllegalAccessException e) {
			LogUtil.error(e);
			throw new MessageException(ConstantBean.MESSAGE_SERVER_ERROR);
		}
		return (T) entity;
	}

	/**
	 * 获取所有下级单位ID，含本单位ID
	 * 
	 * @param id
	 * @return
	 */
	public List<Long> listAllSubOrgIdsWithIn(long id) {
		List<OrganizationEntity> find2 = new OrganizationEntity().select2("o.parent.id = ?1", id);
		List<Long> ids = BeanUtil.filterFieldToList(find2, "id");
		List<Long> result = new ArrayList<Long>();
		for (Long long1 : ids) {
			result.addAll(listAllSubOrgIdsWithIn(long1));
		}
		result.add(id);
		return result;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public PageBarUtil getCommonLikePageBarWithInOrgId(Class<?> cls, Map map, long currentOrgId, int page, int rows) {
		map = map == null ? new HashMap() : map;
		PageBarUtil pageBarUtil;
		List<Long> idsWithIn = listAllSubOrgIdsWithIn(currentOrgId);
		Map paraMap = new HashMap();
		map.remove("page");
		map.remove("rows");
		map.remove("currentOrgId");
		String where = getWhereJpqlFromAndLikeMap(map, paraMap);
		paraMap.put("ids", idsWithIn);
		pageBarUtil = listJpaEntity(cls, where + " and o.organizationEntity.id in :ids", paraMap, page, rows);
		return pageBarUtil;
	}


	public <T> T getById(Class<T> cls, Long id) {
		EntityManager manager = JpaEntityBase.createEntityManager();
		try {
			T t = (T) manager.find(cls, id);
			return t;
		} finally {
			manager.close();
		}
	}

//	private Class getTClass() {
//		Class clazz = this.getClass();
//		ParameterizedType pt = (ParameterizedType) clazz.getGenericSuperclass();
//		return (Class) pt.getActualTypeArguments()[0];
//
//	}

}
