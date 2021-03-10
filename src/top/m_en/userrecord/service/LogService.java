package top.m_en.userrecord.service;

import cn.windfly.util.MapUtil;
import cn.windfly.util.PageBarUtil;
import top.m_en.userrecord.entity.ActionLogEntity;

/**
 * 
 * @version
 */
public class LogService extends BaseService {
	private static LogService INSTANCE = new LogService();

	public static LogService getInstance() {
		return INSTANCE;
	}

	private LogService() {
	}

	public void log(String content, String user) {
		new ActionLogEntity(content, user).save();
	}

	public PageBarUtil<ActionLogEntity> list(String content, int rows, int page) {
		content = content == null ? "" : content;
		return listJpaEntity(ActionLogEntity.class, " o.content like :content order by o.createTime desc",
				MapUtil.toMap("content", content), page, rows);
	}

}
