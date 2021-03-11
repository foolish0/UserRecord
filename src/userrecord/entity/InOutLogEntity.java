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
@Table(name = "inoutlog")
public class InOutLogEntity extends JpaEntityBase<InOutLogEntity> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Version
	private int version;
	@Column
	Long oid;
	@Column(length = 50)
	String name;
	@Column(length = 100)
	String weixinOpenid;
	@Column(length = 5)
	String inoutstr; // 进出小区
	@Column(length = 5)
	String jksm; // 健康声明
	@Column(length = 30)
	String tw; // 体温情况
	@Column(length = 1000)
	String remark = ""; // 备注
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Long getOid() {
		return oid;
	}

	public void setOid(Long oid) {
		this.oid = oid;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWeixinOpenid() {
		return weixinOpenid;
	}

	public void setWeixinOpenid(String weixinOpenid) {
		this.weixinOpenid = weixinOpenid;
	}

	public String getInoutstr() {
		return inoutstr;
	}

	public void setInoutstr(String inoutstr) {
		this.inoutstr = inoutstr;
	}

	public String getJksm() {
		return jksm;
	}

	public void setJksm(String jksm) {
		this.jksm = jksm;
	}

	public String getTw() {
		return tw;
	}

	public void setTw(String tw) {
		this.tw = tw;
	}

	public String getRemark() {
		return remark == null ?"":remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

}
