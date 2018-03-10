package team.hfut.vehiclechart.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.hfut.vehiclechart.bean.trouble.TroubleHistoryBean;
import team.hfut.vehiclechart.bean.trouble.TroubleMapBean;
import team.hfut.vehiclechart.bean.trouble.TroubleParamBean;
import team.hfut.vehiclechart.service.trouble.TroubleService;

@RestController
@RequestMapping("/trouble")
public class UserTroubleController {

	@Resource
	private TroubleService troubleService;

	@RequestMapping("/getTroubleMap")
	public List<TroubleMapBean> selectTroubleMap(TroubleParamBean bean) {
		return troubleService.selectTroubleMap(bean);
	}
	
	@RequestMapping("/getCountList")
	public List<Map<String, Object>> selectCountList(TroubleParamBean bean) {
		return troubleService.selectCountList(bean);
	}

	@RequestMapping("/getTroubleTree")
	public List<Map<String, Object>> selectTroubleTree(TroubleParamBean bean) {
		return troubleService.selectTroubleTree(bean);
	}

	@RequestMapping("/getHistoryList")
	public List<TroubleHistoryBean> selectHistoryList(TroubleParamBean bean) {
		return troubleService.selectHistoryList(bean);
	}

}
