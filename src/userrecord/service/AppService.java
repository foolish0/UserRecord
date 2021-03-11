package userrecord.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import cn.windfly.util.BeanUtil;
import cn.windfly.util.MapUtil;
import cn.windfly.util.PageBarUtil;
import cn.windfly.util.bean.TypeMap;
import cn.windfly.util.exception.MessageException;
import userrecord.entity.InOutLogEntity;
import userrecord.entity.LoginUserEntity;
import userrecord.entity.OrganizationEntity;

public class AppService extends BaseService {
	private static AppService INSTANCE = new AppService();
	private LogService logService = LogService.getInstance();

	public static AppService getInstance() {
		return INSTANCE;
	}

	private AppService() {

	}

	@SuppressWarnings("unchecked")
	public void fillUserInfo(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("realName", "phone", "address");
		LoginUserEntity loginUserEntity = selectLoginUserByWeixinOpenId(weixinOpenId);
		BeanUtil.mapToBeanFiedls(paramsMap, loginUserEntity, true);
		loginUserEntity.saveOrUpdate();
		logService.log("完善个人信息:" + paramsMap + ",weixinOpenId=" + weixinOpenId, loginUserEntity.getRealName());
	}

	public long createAndBindOrg(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("fullName", "address");
		LoginUserEntity loginUserEntity = selectLoginUserByWeixinOpenId(weixinOpenId);

		String fullName = paramsMap.getString("fullName");
		String address = paramsMap.getString("address");

		OrganizationEntity organizationEntity = new OrganizationEntity();
		Object select2One = organizationEntity.select2One("o.fullName = ?1 and o.address = ?2", fullName, address);
		if (select2One != null) {
			throw new MessageException("小区/单位名称已经存在!");
		}
		organizationEntity.setCreateTime(new Date());
		organizationEntity.setFullName(fullName);
		organizationEntity.setAddress(address);
		organizationEntity.save();
		loginUserEntity.setType(LoginUserEntity.TYPE_ADMIN);
		loginUserEntity.setOrganizationEntity(organizationEntity);
		loginUserEntity.saveOrUpdate();
		logService.log("注册并绑定小区/单位:" + paramsMap + ",weixinOpenId=" + weixinOpenId, loginUserEntity.getRealName());
		return organizationEntity.getId();
	}

	public LoginUserEntity selectLoginUserByWeixinOpenId(String weixinOpenId) throws MessageException {
		LoginUserEntity loginUserEntity = new LoginUserEntity().select2One("o.weixinOpenId = ?1", weixinOpenId);
		if (loginUserEntity == null) {
			throw new MessageException("用户不存在");
		}
		return loginUserEntity;
	}

	@SuppressWarnings("unchecked")
	public void addRecord(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("inoutstr", "jksm", "tw", "oid");
		InOutLogEntity inOutLogEntity = new InOutLogEntity();
		LoginUserEntity loginUserEntity = selectLoginUserByWeixinOpenId(weixinOpenId);
		inOutLogEntity.setName(loginUserEntity.getRealName());
		inOutLogEntity.setWeixinOpenid(weixinOpenId);
		inOutLogEntity.setCreateTime(new Date());
		BeanUtil.mapToBeanFiedls(paramsMap, inOutLogEntity, true);
		inOutLogEntity.save();
		logService.log("新增进出记录:" + paramsMap + ",weixinOpenId=" + weixinOpenId, loginUserEntity.getRealName());
	}

	@SuppressWarnings("unchecked")
	public void addRecordNoid(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("name", "phone", "address", "inoutstr", "jksm", "tw",
				"oid");
		InOutLogEntity inOutLogEntity = new InOutLogEntity();
		inOutLogEntity.setCreateTime(new Date());
		BeanUtil.mapToBeanFiedls(paramsMap, inOutLogEntity, true);
		inOutLogEntity.save();
		logService.log("管理员新增进出记录:" + paramsMap + ",weixinOpenId=" + weixinOpenId, paramsMap.getString("realName"));
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public PageBarUtil findRecord(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("page", "rows", "oid");
		InOutLogEntity inOutLogEntity = new InOutLogEntity();
		inOutLogEntity.setPageConditionByPage("o.oid = :oid order by o.createTime desc",
				MapUtil.toMap("oid", paramsMap.getLong("oid")), paramsMap.getInt("page"), paramsMap.getInt("rows"));
		PageBarUtil selectPageBarUtil = inOutLogEntity.selectPageBarUtil();
		List<InOutLogEntity> objs = selectPageBarUtil.getObjs();
		Collection<Map<String, Object>> listObjsFiedlsToMapIgnoreFields = BeanUtil
				.listObjsFiedlsToMapIgnoreFieldsNullToEmpty(objs, "weixinOpenid", "version");
		ArrayList arrayList = new ArrayList();
		arrayList.addAll(listObjsFiedlsToMapIgnoreFields);
		selectPageBarUtil.setObjs(arrayList);
		return selectPageBarUtil;

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public PageBarUtil findUser(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("page", "rows", "oid");

		LoginUserEntity loginUserEntity = new LoginUserEntity();
		loginUserEntity.setPageConditionByPage("o.realName like :realName",
				MapUtil.toMap("realName", "%" + Objects.toString(paramsMap.getString("realName"), "") + "%"),
				paramsMap.getInt("page"), paramsMap.getInt("rows"));

		PageBarUtil selectPageBarUtil = loginUserEntity.selectPageBarUtil();
		List<LoginUserEntity> objs = selectPageBarUtil.getObjs();
		Collection<Map<String, Object>> listObjsFiedlsToMapIgnoreFields = BeanUtil.listObjsFiedlsToMap(objs, "id",
				"realName", "phone", "address");
		ArrayList arrayList = new ArrayList();
		arrayList.addAll(listObjsFiedlsToMapIgnoreFields);
		selectPageBarUtil.setObjs(arrayList);
		return selectPageBarUtil;

	}

	public void modifyRecord(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("id", "inoutstr", "jksm", "tw", "oid");
		InOutLogEntity inOutLogEntity = new InOutLogEntity().selectByPk(paramsMap.getLong("id"));
		String msgString = "";
		if (!Objects.equals(inOutLogEntity.getInoutstr(), paramsMap.getString("inoutstr"))) {
			msgString += "inoutstr:" + Objects.toString(inOutLogEntity.getInoutstr(), "") + " => "
					+ Objects.toString(paramsMap.getString("inoutstr"), "");
			inOutLogEntity.setInoutstr(paramsMap.getString("inoutstr"));
		}
		if (!Objects.equals(inOutLogEntity.getTw(), paramsMap.getString("tw"))) {
			msgString += "tw:" + Objects.toString(inOutLogEntity.getTw(), "") + " => "
					+ Objects.toString(paramsMap.getString("tw"), "");
			inOutLogEntity.setTw(paramsMap.getString("tw"));
		}
		if (!Objects.equals(inOutLogEntity.getJksm(), paramsMap.getString("jksm"))) {
			msgString += "jksm:" + Objects.toString(inOutLogEntity.getJksm(), "") + " => "
					+ Objects.toString(paramsMap.getString("jksm"), "");
			inOutLogEntity.setJksm(paramsMap.getString("jksm"));
		}
		if (!Objects.equals(inOutLogEntity.getRemark(), paramsMap.getString("remark"))) {
			msgString += "remark:" + Objects.toString(inOutLogEntity.getRemark(), "") + " => "
					+ Objects.toString(paramsMap.getString("remark"), "");
			inOutLogEntity.setRemark(paramsMap.getString("remark"));
		}
		inOutLogEntity.saveOrUpdate();
		LoginUserEntity loginUserEntity = selectLoginUserByWeixinOpenId(weixinOpenId);
		logService.log("修改进出记录:" + msgString + ",weixinOpenId=" + weixinOpenId, loginUserEntity.getRealName());
	}

	public void modifyUser(TypeMap paramsMap, String weixinOpenId) throws MessageException {
		paramsMap.containsKeyValueBothNotEmptyWithMessageException("id", "realName", "phone", "address");
		LoginUserEntity loginUserEntity = new LoginUserEntity().selectByPk(paramsMap.getLong("id"));
		String msgString = "";
		if (!Objects.equals(loginUserEntity.getRealName(), paramsMap.getString("realName"))) {
			msgString += "realName:" + Objects.toString(loginUserEntity.getRealName(), "") + " => "
					+ Objects.toString(paramsMap.getString("realName"), "");
			loginUserEntity.setRealName(paramsMap.getString("realName"));
		}
		if (!Objects.equals(loginUserEntity.getPhone(), paramsMap.getString("phone"))) {
			msgString += "phone:" + Objects.toString(loginUserEntity.getPhone(), "") + " => "
					+ Objects.toString(paramsMap.getString("phone"), "");
			loginUserEntity.setPhone(paramsMap.getString("phone"));
		}
		if (!Objects.equals(loginUserEntity.getAddress(), paramsMap.getString("address"))) {
			msgString += "address:" + Objects.toString(loginUserEntity.getAddress(), "") + " => "
					+ Objects.toString(paramsMap.getString("address"), "");
			loginUserEntity.setAddress(paramsMap.getString("address"));
		}
		loginUserEntity.saveOrUpdate();
		LoginUserEntity loginUserEntitywx = selectLoginUserByWeixinOpenId(weixinOpenId);
		logService.log("修改用户信息:" + msgString + ",weixinOpenId=" + weixinOpenId, loginUserEntitywx.getRealName());
	}
}
