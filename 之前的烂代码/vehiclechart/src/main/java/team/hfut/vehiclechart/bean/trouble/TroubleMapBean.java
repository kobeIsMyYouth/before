package team.hfut.vehiclechart.bean.trouble;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import team.hfut.vehiclechart.bean.base.KeyValBean;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class TroubleMapBean  implements Serializable {
	private static final long serialVersionUID = 4900739686136828562L;

	private String provice;

	private List<KeyValBean> childs;

	public String getProvice() {
		return provice;
	}

	public void setProvice(String provice) {
		this.provice = provice;
	}

	public List<KeyValBean> getChilds() {
		return childs;
	}

	public void setChilds(List<KeyValBean> childs) {
		this.childs = childs;
	}

}
