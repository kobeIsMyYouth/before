package team.hfut.vehiclechart.bean.usergroup;

import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class UserGroupCountBean  implements Serializable {
	private static final long serialVersionUID = 2547486675057149258L;

	private Long id;

	private String user_type;

	private String count_title;

	private String count_value;

	private String count_unit;

	private String value_type;

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

	public String getCount_title() {
		return count_title;
	}

	public void setCount_title(String count_title) {
		this.count_title = count_title;
	}

	public String getCount_value() {
		return count_value;
	}

	public void setCount_value(String count_value) {
		this.count_value = count_value;
	}

	public String getCount_unit() {
		return count_unit;
	}

	public void setCount_unit(String count_unit) {
		this.count_unit = count_unit;
	}

	public String getValue_type() {
		return value_type;
	}

	public void setValue_type(String value_type) {
		this.value_type = value_type;
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
