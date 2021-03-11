package userrecord.util;

import java.io.IOException;

import org.json.JSONException;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;

import cn.windfly.util.LogUtil;
import cn.windfly.util.PropertiesUtil;
import cn.windfly.util.exception.MessageException;

public class SmsTencentUtil {
	// 短信应用SDK AppID
	static int appid = PropertiesUtil.getInt("sms.tencent.appid"); // 1400开头
	// 短信应用SDK AppKey
	static String appkey = PropertiesUtil.getString("sms.tencent.appkey");
	// 需要发送短信的手机号码
	// 短信模板ID，需要在短信应用中申请
	static int templateId = PropertiesUtil.getInt("sms.tencent.templateid"); // 1400开头
	// 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请
	// templateId7839对应的内容是"您的验证码是: {1}"
	// 签名
	static String smsSign = PropertiesUtil.getString("sms.tencent.signname");
	// 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是一个示例，真实的签名需要在短信控制台申请。
	private static boolean realSend = PropertiesUtil.getBoolean("sms.realsent");
	public static void main(String[] args) throws MessageException {
		sendValidCodePhone("18905606001", "1234");
	}

	public static void sendValidCodePhone(String phone, String code) throws MessageException {
		if (!realSend) {
			LogUtil.info("模拟发送短信(" + phone + ")：" + code);
			return;
		}

		try {
			String[] params = { code };// 数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
			SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
			SmsSingleSenderResult result = ssender.sendWithParam("86", phone, templateId, params, smsSign, "", ""); // 签名参数未提供或者为空时，会使用默认签名发送短信
			if (result.result != 0) {
				throw new MessageException(status(result.result + ""));
			}
		} catch (HTTPException e) {
			LogUtil.error(e);
			throw new MessageException("接口响应错误");
		} catch (JSONException e) {
			LogUtil.error(e);
			throw new MessageException("json解析错误");
		} catch (IOException e) {
			LogUtil.error(e);
			throw new MessageException("网络IO错误");
		}
	}

	private static String status(String inputline) {
		if ("0".equals(inputline)) {
			return null;
		} else if ("1001".equals(inputline)) {
			return "sig 校验失败";
		} else if ("1002".equals(inputline)) {
			return "短信/语音内容中含有敏感词";
		} else if ("1003".equals(inputline)) {
			return "请求包体没有 sig 字段或 sig 为空";
		} else if ("1004".equals(inputline)) {
			return "请求包解析失败，通常情况下是由于没有遵守 API 接口说明规范导致的";
		} else if ("1006".equals(inputline)) {
			return "请求没有权限";
		} else if ("1007".equals(inputline)) {
			return "其他错误";
		} else if ("1008".equals(inputline)) {
			return "请求下发短信/语音超时";
		} else if ("1009".equals(inputline)) {
			return "请求 IP 不在白名单中";
		} else if ("1011".equals(inputline)) {
			return "不存在该 REST API 接口";
		} else if ("1012".equals(inputline)) {
			return "签名格式错误或者签名未审批";
		} else if ("1013".equals(inputline)) {
			return "下发短信/语音命中了频率限制策略";
		} else if ("1014".equals(inputline)) {
			return "模版未审批或请求的内容与审核通过的模版内容不匹配";
		} else if ("1015".equals(inputline)) {
			return "手机号在黑名单库中";
		} else if ("1016".equals(inputline)) {
			return "手机号格式错误";
		} else if ("1017".equals(inputline)) {
			return "请求的短信内容太长";
		} else if ("1018".equals(inputline)) {
			return "语音验证码格式错误";
		} else if ("1019".equals(inputline)) {
			return "sdkappid 不存在";
		} else if ("1020".equals(inputline)) {
			return "sdkappid 已禁用";
		} else if ("1021".equals(inputline)) {
			return "请求发起时间不正常，通常是由于您的服务器时间与腾讯云服务器时间差异超过 10 分钟导致的";
		} else if ("1022".equals(inputline)) {
			return "业务短信日下发条数超过设定的上限";
		} else if ("1023".equals(inputline)) {
			return "单个手机号 30 秒内下发短信条数超过设定的上限";
		} else if ("1024".equals(inputline)) {
			return "单个手机号 1 小时内下发短信条数超过设定的上限";
		} else if ("1025".equals(inputline)) {
			return "单个手机号日下发短信条数超过设定的上限";
		} else if ("1026".equals(inputline)) {
			return "单个手机号下发相同内容超过设定的上限";
		} else if ("1029".equals(inputline)) {
			return "营销短信发送时间限制";
		} else if ("1030".equals(inputline)) {
			return "不支持该请求";
		} else if ("1031".equals(inputline)) {
			return "套餐包余量不足";
		} else if ("1032".equals(inputline)) {
			return "个人用户没有发营销短信的权限";
		} else if ("1033".equals(inputline)) {
			return "欠费被停止服务";
		} else if ("1034".equals(inputline)) {
			return "群发请求里既有了国内也有国际手机号";
		} else if ("1036".equals(inputline)) {
			return "单个模板变量字符数超过 12 个";
		} else if ("1045".equals(inputline)) {
			return "不支持该地区短信下发";
		} else if ("1046".equals(inputline)) {
			return "调用群发 API 接口单次提交的手机号个数超过200个";
		} else if ("60008".equals(inputline)) {
			return "处理请求超时";
		} else {
			return "未知错误";
		}
	}

}
