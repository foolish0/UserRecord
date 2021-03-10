package top.m_en.userrecord.controller.vo;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class EasyUiTreeVO {
	private String id;
	private String text;
	private String iconCls;
	private String state;
	@SuppressWarnings("rawtypes")
	private Map attributes;
	private boolean checked;
	private List<EasyUiTreeVO> children = new ArrayList<EasyUiTreeVO>();

	public EasyUiTreeVO() {
		super();
	}

	public EasyUiTreeVO(String id, String text, List<EasyUiTreeVO> children) {
		super();
		this.id = id;
		this.text = text;
		this.children = children;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getId() {
		return id;
	}

	@SuppressWarnings("rawtypes")
	public Map getAttributes() {
		return attributes;
	}

	@SuppressWarnings("rawtypes")
	public void setAttributes(Map attributes) {
		this.attributes = attributes;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public List<EasyUiTreeVO> getChildren() {
		return children;
	}

	public void setChildren(List<EasyUiTreeVO> children) {
		this.children = children;
	}

}
