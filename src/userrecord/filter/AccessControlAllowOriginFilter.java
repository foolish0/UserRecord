package userrecord.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class LoginFilter
 */
@WebFilter(urlPatterns = "*.dhtml")
public class AccessControlAllowOriginFilter implements Filter {

	/**
	 * Default constructor.
	 */
	public AccessControlAllowOriginFilter() {
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {

		  HttpServletRequest request = (HttpServletRequest) req;
          HttpServletResponse response = (HttpServletResponse) resp;
          String method = request.getMethod();
          // this origin value could just as easily have come from a database
          response.setHeader("Access-Control-Allow-Origin", "*");
          response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS");
          response.setHeader("Access-Control-Max-Age", "3600");
          response.setHeader("Access-Control-Allow-Credentials", "true");
          response.setHeader("Access-Control-Allow-Headers", "Accept, Origin, X-Requested-With, Content-Type,Last-Modified,device,token");
          if ("OPTIONS".equals(method)) {//检测是options方法则直接返回200
              response.setStatus(200);
          } else {
              chain.doFilter(req, resp);
          }
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

}
