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
@Table(name = "smslog")
public class SmsLogEntity extends JpaEntityBase<SmsLogEntity> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Version
	private int version;
	@Column(length=1000)
	String phone;
	@Column(length=1000)
	String content;
	@Column
	String sender;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public SmsLogEntity() {
		super();
		this.createTime = new Date();
	}

	public SmsLogEntity(String phone, String content, String sender) {
		super();
		this.phone = phone;
		this.content = content;
		this.sender = sender;
		this.createTime = new Date();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	
}
