package team.hfut.vehiclechart.bean.usergroup;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import team.hfut.vehiclechart.bean.base.KeyValBean;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class UserGroupMapBean  implements Serializable {
	private static final long serialVersionUID = 2757855783064394211L;

	private Long id;

	private String provice;
	
	private String user_type;
	
	private Long user_num;

	List<KeyValBean> childs;

	public List<KeyValBean> getChilds() {
		return childs;
	}

	public void setChilds(List<KeyValBean> childs) {
		this.childs = childs;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProvice() {
		return provice;
	}

	public void setProvice(String provice) {
		this.provice = provice;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public Long getUser_num() {
		return user_num;
	}

	public void setUser_num(Long user_num) {
		this.user_num = user_num;
	}

}
