package team.hfut.vehiclechart.bean.trouble;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import team.hfut.vehiclechart.bean.base.KeyValBean;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class TroubleHistoryBean  implements Serializable {
	private static final long serialVersionUID = 4900739686136828562L;

	private String trouble_type;
	
	private String trouble_name;

	private List<KeyValBean> childs;

	public String getTrouble_type() {
		return trouble_type;
	}

	public void setTrouble_type(String trouble_type) {
		this.trouble_type = trouble_type;
	}

	public String getTrouble_name() {
		return trouble_name;
	}

	public void setTrouble_name(String trouble_name) {
		this.trouble_name = trouble_name;
	}

	public List<KeyValBean> getChilds() {
		return childs;
	}

	public void setChilds(List<KeyValBean> childs) {
		this.childs = childs;
	}

}
