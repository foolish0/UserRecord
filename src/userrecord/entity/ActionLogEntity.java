package userrecord.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import cn.windfly.util.JpaEntityBase;

@Entity
@Table(name = "actionlog")
public class ActionLogEntity extends JpaEntityBase<ActionLogEntity> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Version
	private int version;
	@Column(length = 50)
	String user;
	@Column(length = 1000)
	String content;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public ActionLogEntity() {
		super();
	}

	public ActionLogEntity(String content,String user) {
		this.content = content;
		this.user = user;
		this.createTime = new Date();
	}

	public long getId() {
		return id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

}
