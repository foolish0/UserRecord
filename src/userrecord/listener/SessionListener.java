package userrecord.listener;

import java.util.HashMap;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import userrecord.controller.vo.ConstantBean;
import userrecord.entity.LoginUserEntity;

/**
 * Application Lifecycle Listener implementation class SessionListener
 *
 */
@WebListener
public class SessionListener implements HttpSessionListener {
	public static HashMap<String, LoginUserEntity> ONLINEUSERS = new HashMap<>();

	/**
	 * Default constructor.
	 */
	public SessionListener() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpSessionListener#sessionCreated(HttpSessionEvent)
	 */
	@SuppressWarnings("rawtypes")
	public void sessionCreated(HttpSessionEvent arg0) {
	}

	/**
	 * @see HttpSessionListener#sessionDestroyed(HttpSessionEvent)
	 */
	public void sessionDestroyed(HttpSessionEvent event) {
		HttpSession session = event.getSession();
		if (session != null) {
			if (session.getAttribute(ConstantBean.SESSION_LOGINUSER) != null) {
				session.invalidate();
			}
			ONLINEUSERS.remove(session.getId());
		}
		System.out.println(session);
		System.out.println("sessionDestroyed");
	}

}
