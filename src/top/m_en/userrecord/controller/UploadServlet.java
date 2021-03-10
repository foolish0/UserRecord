package top.m_en.userrecord.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import cn.windfly.don.DonUtil;
import cn.windfly.don.listener.DependsOnNameListener;
import cn.windfly.util.DateUtil;
import cn.windfly.util.JsonUtil;
import cn.windfly.util.MapUtil;

/**
 * 
 * @version
 *
 */
@WebServlet(name = "upload", urlPatterns = "/upload")
// 使用注解@MultipartConfig将一个Servlet标识为支持文件上传
@MultipartConfig // 标识Servlet支持文件上传
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = -7149682966542211873L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		ArrayList<String> fileurls = new ArrayList<>();
		// 获取上传的文件集合
		Collection<Part> parts = request.getParts();
		// 上传单个文件
		if (parts.size() == 1) {
			// Servlet3.0将multipart/form-data的POST请求封装成Part，通过Part对上传的文件进行操作。
			// Part part = parts[0];//从上传的文件集合中获取Part对象
			Part part = request.getPart("file");// 通过表单file控件(<input type="file"
												// name="file">)的名字直接获取Part对象
			// Servlet3没有提供直接获取文件名的方法,需要从请求头中解析出来
			// 获取请求头，请求头的格式：form-data; name="file"; filename="snmp4j--api.zip"
			String header = part.getHeader("content-disposition");
			// 获取文件名
			String fileName = getFileName(header);
			if (fileName != null) {
				// 把文件写到指定路径
				DonUtil.createUploadDirDefaultRoot();
				String fileurl = "resources/upload" + File.separator + new SimpleDateFormat("yyyyMM").format(new Date())
						+ File.separator + fileName;
				InputStream in = part.getInputStream();
				OutputStream out = new FileOutputStream(DependsOnNameListener.BasePath + fileurl);
				byte[] buffer = new byte[1024];
				int length = -1;
				while ((length = in.read(buffer)) != -1) {
					out.write(buffer, 0, length);
				}
				in.close();
				out.close();
				
				fileurls.add("../" + fileurl);
			}
		} else {
			// 一次性上传多个文件
			for (Part part : parts) {// 循环处理上传的文件
				// 获取请求头，请求头的格式：form-data; name="file";
				// filename="snmp4j--api.zip"
				String header = part.getHeader("content-disposition");
				// 获取文件名
				String fileName = getFileName(header);
				if (fileName == null) {
					continue;
				}
				// 把文件写到指定路径
				String fileurl = "resources/upload" + File.separator + new SimpleDateFormat("yyyyMM").format(new Date())
						+ File.separator + fileName;
				File file = new File(DependsOnNameListener.BasePath +fileurl);
				if (!file.getParentFile().exists()) {
					file.getParentFile().mkdirs();
				}
				InputStream in = part.getInputStream();
				OutputStream out = new FileOutputStream(DependsOnNameListener.BasePath + fileurl);
				byte[] buffer = new byte[1024];
				int length = -1;
				while ((length = in.read(buffer)) != -1) {
					out.write(buffer, 0, length);
				}
				in.close();
				out.close();
				fileurls.add("../" + fileurl);
			}
		}
		PrintWriter out = response.getWriter();
		Map map = MapUtil.toMap("errno", 0, "data", fileurls);
		String json = JsonUtil.toJson(map);
		out.println(json);
		out.flush();
		out.close();
	}

	/**
	 * 根据请求头解析出文件名 请求头的格式：火狐和google浏览器下：form-data; name="file";
	 * filename="snmp4j--api.zip" IE浏览器下：form-data; name="file";
	 * filename="E:\snmp4j--api.zip"
	 * 
	 * @param header
	 *            请求头
	 * @return 文件名
	 */
	public String getFileName(String header) {
		/**
		 * String[] tempArr1 =
		 * header.split(";");代码执行完之后，在不同的浏览器下，tempArr1数组里面的内容稍有区别
		 * 火狐或者google浏览器下：tempArr1={form-data,name="file",filename=
		 * "snmp4j--api.zip"}
		 * IE浏览器下：tempArr1={form-data,name="file",filename="E:\snmp4j--api.zip"}
		 */
		String[] tempArr1 = header.split(";");
		if (tempArr1.length<3) {
			return null;
		}
		/**
		 * 火狐或者google浏览器下：tempArr2={filename,"snmp4j--api.zip"}
		 * IE浏览器下：tempArr2={filename,"E:\snmp4j--api.zip"}
		 */
		String[] tempArr2 = tempArr1[2].split("=");
		// 获取文件名，兼容各种浏览器的写法
		String fileName = tempArr2[1].substring(tempArr2[1].lastIndexOf("\\") + 1).replaceAll("\"", "");
		return DateUtil.formatDate(new Date(),"yyyyMMddHHmmss")+"_"+fileName;
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doGet(request, response);
	}
}
