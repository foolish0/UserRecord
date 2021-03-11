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

import cn.windfly.util.JpaEntityBase;

@Entity
@Table(name = "organization")
public class OrganizationEntity extends JpaEntityBase<OrganizationEntity> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 60, nullable = false)
	private String fullName;// 5． 企业名称
	@Column
	private String address;
	@Column(length = 30)
	private String contentUser;// 11． 联系人
	@Column(length = 20)
	private String contentPhone;// 12． 联系电话

	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public Long getId() {
		return id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getContentUser() {
		return contentUser;
	}

	public void setContentUser(String contentUser) {
		this.contentUser = contentUser;
	}

	public String getContentPhone() {
		return contentPhone;
	}

	public void setContentPhone(String contentPhone) {
		this.contentPhone = contentPhone;
	}

}
