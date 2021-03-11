package userrecord.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import cn.windfly.util.JpaEntityBase;

@Entity
@Table(name = "loginuser")
public class LoginUserEntity extends JpaEntityBase<LoginUserEntity> {
	public static final String STATUS_OK = "正常";
	public static final String STATUS_CLOSE = "关闭";
	public static final String TYPE_ADMIN = "admin";
	public static final String TYPE_USER = "user";

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Version
	private int version;
	@Column
	String account;
	@Column
	String realName;
	@Column
	String phone;
	@Column
	String password;
	@Column
	String status;
	@Column
	String address;
	@Column
	String type;
	@Column
	String weixinOpenId;
	@ManyToOne
	private OrganizationEntity organizationEntity;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;// 创建用户时间

	public OrganizationEntity getOrganizationEntity() {
		return organizationEntity;
	}

	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getWeixinOpenId() {
		return weixinOpenId;
	}

	public void setWeixinOpenId(String weixinOpenId) {
		this.weixinOpenId = weixinOpenId;
	}

	public void setOrganizationEntity(OrganizationEntity organizationEntity) {
		this.organizationEntity = organizationEntity;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getId() {
		return id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

}
