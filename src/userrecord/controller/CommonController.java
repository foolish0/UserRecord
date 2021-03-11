package userrecord.controller;

import javax.servlet.http.HttpServletRequest;

import cn.windfly.util.bean.TypeMap;

/**
 * @author lizhenjiang
 */
public class CommonController extends ControllerBase {
	public String j(String p, HttpServletRequest request, TypeMap params) {
		return p;
	}
}
