package userrecord.controller;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.windfly.don.pojo.JsonResult;
import cn.windfly.util.BeanUtil;
import cn.windfly.util.CacheByMapUtil;
import cn.windfly.util.HttpUtil;
import cn.windfly.util.JsonUtil;
import cn.windfly.util.LogUtil;
import cn.windfly.util.MapUtil;
import cn.windfly.util.PropertiesUtil;
import cn.windfly.util.ValidateUtil;
import cn.windfly.util.bean.TypeMap;
import cn.windfly.util.exception.MessageException;
import userrecord.entity.LoginUserEntity;
import userrecord.entity.OrganizationEntity;

/**
 * 手机APP请求接口
 * 
 * @author DFH
 *
 */
public class WeixinController extends ControllerBase {

	// 网页授权获取用户信息
	// http://localhost/UserRecord/Weixin/weixinValidationPage.dhtml?backurl=http%3A%2F%2Ftest.cn%3Fa%3D1
	@SuppressWarnings("deprecation")
	public String weixinValidationPage(String backurl, HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 共账号及商户相关参数
		String appid = PropertiesUtil.getString("weixin.appid");
		if (ValidateUtil.isEmpty(backurl)) {
			throw new ServletException("参数错误");
		}

		backurl = URLEncoder.encode(backurl);
		// scope 参数视各自需求而定，这里用scope=snsapi_base（snsapi_userinfo）
		// 不弹出授权页面直接授权目的只获取统一支付接口的openid
		String url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + backurl
				+ "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
		response.sendRedirect(url);
		LogUtil.info(url);
		return null; // 添加，防止跳转时报错
	}

	@SuppressWarnings({ "rawtypes" })
	public JsonResult findTokenByCode(HttpServletRequest request, HttpServletResponse response, Map<String, Object> map)
			throws ServletException, IOException, MessageException {
		// 网页授权后获取传递的参数
		String code = request.getParameter("code");

		// 商户相关资料
		String appid = PropertiesUtil.getString("weixin.appid");
		String appsecret = PropertiesUtil.getString("weixin.appsecret");

		String openId = "";
		String URL = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appid + "&secret=" + appsecret
				+ "&code=" + code + "&grant_type=authorization_code";
		LogUtil.info(URL);
		String httpReString = HttpUtil.getString(URL);
		LogUtil.info("httpReString <= ", httpReString);
		if (null != httpReString) {
			try {
				Map parseJson = JsonUtil.parseJson(httpReString);
				openId = (String) parseJson.get("openid");
			} catch (Exception e) {
				LogUtil.error(e);
			}
			return loginByOpenId(openId);
		}
		return JsonResult.newErrorResult("微信请求出错");
	}

	public JsonResult loginByOpenId(String openId) throws MessageException {
		if (ValidateUtil.isNotEmpty(openId)) {
			LoginUserEntity user = LoginUserEntity.selectJpqlOne(
					"select o from " + LoginUserEntity.class.getName() + " o where o.weixinOpenId=:openId",
					MapUtil.toMap("openId", openId));
			if (user == null) {
				user = new LoginUserEntity();
				user.setCreateTime(new Date());
				user.setType(LoginUserEntity.TYPE_USER);
				user.setWeixinOpenId(openId);
				user.save();
			}

			String string = UUID.randomUUID().toString();
			CacheByMapUtil.put(string, openId, 600);

			OrganizationEntity organizationEntity = user.getOrganizationEntity();
			Long oid = null;
			String oname = null;
			if (organizationEntity != null) {
				oid = organizationEntity.getId();
				oname = organizationEntity.getFullName();
			}

			Map<String, Object> fiedlsToMap = BeanUtil.fiedlsToMap(user, "address", "account", "realName", "phone",
					"status", "type");
			fiedlsToMap.put("oid", oid);
			fiedlsToMap.put("oname", oname);

			return JsonResult.newSuccessResult(MapUtil.toMap("token", string, "userinfo", fiedlsToMap));
		} else {
			return JsonResult.newErrorResult("openid is not found");
		}
	}

	public JsonResult fillUserInfo(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		appService.fillUserInfo(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult();
	}

	public JsonResult createAndBindOrg(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		long id = appService.createAndBindOrg(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult(MapUtil.toMap("oid", id));
	}

	public JsonResult addRecord(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		appService.addRecord(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult();
	}

	public JsonResult addRecordNoid(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		appService.addRecordNoid(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult();
	}

	public JsonResult findRecord(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		return JsonResult.newSuccessResult(appService.findRecord(paramsMap, weixinOpenId));
	}

	public JsonResult findUser(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		return JsonResult.newSuccessResult(appService.findUser(paramsMap, weixinOpenId));
	}

	public JsonResult modifyRecord(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		appService.modifyRecord(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult();
	}

	public JsonResult modifyUser(TypeMap paramsMap, HttpServletRequest request) throws MessageException {
		String weixinOpenId = getWeixinOpenId(request);
		appService.modifyUser(paramsMap, weixinOpenId);
		return JsonResult.newSuccessResult();
	}
}
