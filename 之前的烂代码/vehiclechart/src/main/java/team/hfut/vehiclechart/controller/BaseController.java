package team.hfut.vehiclechart.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import team.hfut.vehiclechart.bean.base.DictBean;
import team.hfut.vehiclechart.service.base.DictService;

@RestController
public class BaseController {

	@Resource
	private DictService dictService;

	@RequestMapping("/dict/getById")
	public DictBean getById(@RequestParam(value = "id", required = true) String id) {
		return dictService.selectByPrimaryKey(id);
	}

	@RequestMapping("/dict/getByParentId")
	public List<DictBean> getByParentId(@RequestParam(value = "pid", required = true) String pid) {
		return dictService.selectByParentId(pid);
	}

	@RequestMapping("/dict/getChildTree")
	public List<DictBean> getChildTree(@RequestParam(value = "pid", required = true) String pid) {
		return dictService.selectChildTree(pid);
	}

}
