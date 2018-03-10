package team.hfut.vehiclechart.bean.base;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
public class DictBean implements Serializable {
	private static final long serialVersionUID = 5498198148502003712L;

	private String id;

	private String dictname;

	private Long sort;

	private String remark;
	
	private String pid;
	
	private List<DictBean> childlist;

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public List<DictBean> getChildlist() {
		return childlist;
	}

	public void setChildlist(List<DictBean> childlist) {
		this.childlist = childlist;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDictname() {
		return dictname;
	}

	public void setDictname(String dictname) {
		this.dictname = dictname;
	}

	public Long getSort() {
		return sort;
	}

	public void setSort(Long sort) {
		this.sort = sort;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}
