package jetty.web;


import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.Configuration;
import org.eclipse.jetty.webapp.WebAppContext;


/**
 * 使用Jetty运行调试Web应用
 */
public class UserRecord_Jetty {
	
	static final String URL = "http://localhost";
	static final int PORT = 80;
	static final String CONTEXT = "/UserRecord";
	static final String CONTEXT_FILE_NAME = "WebContent";

	public static void main(String[] args) throws Exception {
		
		Server server = new Server(PORT);
		WebAppContext context = new WebAppContext();
		context.getInitParams().put("org.eclipse.jetty.servlet.Default.useFileMappedBuffer", 
				"false");
		context.setContextPath(CONTEXT);
		context.setResourceBase(CONTEXT_FILE_NAME);
		 Configuration.ClassList classlist = Configuration.ClassList
	                .setServerDefault( server );
	        classlist.addAfter(
	                "org.eclipse.jetty.webapp.FragmentConfiguration",
	                "org.eclipse.jetty.plus.webapp.EnvConfiguration",
	                "org.eclipse.jetty.plus.webapp.PlusConfiguration");
	        classlist.addBefore("org.eclipse.jetty.webapp.JettyWebXmlConfiguration",
	                            "org.eclipse.jetty.annotations.AnnotationConfiguration");
		server.setHandler(context);
		
		
		context.setAttribute(
	                "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern",
	                ".*/[^/]*servlet-api-[^/]*\\.jar$|.*/javax.servlet.jsp.jstl-.*\\.jar$|.*/[^/]*taglibs.*\\.jar$");
		
		
		server.start();
//		Set<SessionHandler> sessionHandlers = server.getSessionIdManager().getSessionHandlers();
//		for (SessionHandler sessionHandler : sessionHandlers) {
//			sessionHandler.setMaxInactiveInterval(30);
//		}
		server.dumpStdErr();
		System.out.println("jetty容器启动完成!");
		System.out.println("访问地址: " + URL + ":" + PORT + CONTEXT);
		server.join();
	}

}
