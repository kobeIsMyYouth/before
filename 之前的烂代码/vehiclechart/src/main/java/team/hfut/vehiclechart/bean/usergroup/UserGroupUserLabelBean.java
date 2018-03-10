package team.hfut.vehiclechart.bean.usergroup;

import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class UserGroupUserLabelBean  implements Serializable {
	private static final long serialVersionUID = 1513685517952477973L;

	private Long id;

	private String user_type;

	private String user_label;

	private Long user_num;

	private String create_time;

	private Long version;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public String getUser_label() {
		return user_label;
	}

	public void setUser_label(String user_label) {
		this.user_label = user_label;
	}

	public Long getUser_num() {
		return user_num;
	}

	public void setUser_num(Long user_num) {
		this.user_num = user_num;
	}

	public String getCreate_time() {
		return create_time;
	}

	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

}
