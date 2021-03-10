package top.m_en.userrecord.filter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.windfly.don.pojo.JsonResult;
import cn.windfly.util.CacheByMapUtil;
import cn.windfly.util.JsonUtil;
import cn.windfly.util.MapUtil;
import cn.windfly.util.ValidateUtil;
import top.m_en.userrecord.controller.vo.ConstantBean;

/**
 * Servlet Filter implementation class LoginFilter
 */
@WebFilter(urlPatterns = "*.dhtml")
public class LoginFilter implements Filter {

	/**
	 * Default constructor.
	 */
	public LoginFilter() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		// 中文乱码问题
		req.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		String servletPath = request.getServletPath();

		List<String> ignoreStart = Arrays.asList("/Weixin/weixinValidationPage.dhtml",
				"/Weixin/weixinValidationServlet.dhtml",
				"/Weixin/loginByOpenId.dhtml",
				"/Weixin/findTokenByCode.dhtml",
				"/Web/", "/Login/page.dhtml", "/Login/basePage.dhtml");
		boolean isiggnore = false;
		for (String string : ignoreStart) {
			if (servletPath.startsWith(string)) {
				isiggnore = true;
			}
		}

		if (!isiggnore) {
			if (servletPath.startsWith("/Weixin/")) {
				String header = request.getHeader("token");
				String token = null;
				if (header!=null) {
					 token = CacheByMapUtil.get(header);
					 if (token != null) {
						CacheByMapUtil.resetLiveTime(token);
					}
				}
				if (ValidateUtil.isEmpty(token)) {
					response.getWriter().write(JsonUtil.toJson(MapUtil.toMap("code",0,"msg","会话已过期，请关闭程序重新扫描二维码或重新登录！","sessionout",true)));
					response.getWriter().flush();
					response.getWriter().close();
					return;
				}
			} else {
				Object user = session.getAttribute(ConstantBean.SESSION_LOGINUSER);
				if (ValidateUtil.isNull(user)) {
					String contextPath = request.getContextPath();
					contextPath = contextPath.equals("/") ? "" : contextPath;
					response.sendRedirect(contextPath + "/Login/page.dhtml?event_msg=dlcs");
					return;
				}
			}

		}

		chain.doFilter(request, response);

	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

}
