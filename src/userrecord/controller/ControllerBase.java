package userrecord.controller;

import javax.servlet.http.HttpServletRequest;

import cn.windfly.util.CacheByMapUtil;
import userrecord.controller.vo.ConstantBean;
import userrecord.entity.LoginUserEntity;
import userrecord.service.AppService;
import userrecord.service.LogService;

public class ControllerBase {
	LogService logService = LogService.getInstance();
	AppService appService = AppService.getInstance();

	protected LoginUserEntity getLoginUserFromSession(HttpServletRequest request) {
		return (LoginUserEntity) request.getSession().getAttribute(ConstantBean.SESSION_LOGINUSER);
	}

	protected long getLoginUserOrgId(HttpServletRequest request) {
		return ((LoginUserEntity) request.getSession().getAttribute(ConstantBean.SESSION_LOGINUSER))
				.getOrganizationEntity().getId();
	}
	
	protected String getWeChatOpenId(HttpServletRequest request) {
		String header = request.getHeader("token");
		if (header == null) {
			return null;
		}
		return CacheByMapUtil.get(header);
	}
}
