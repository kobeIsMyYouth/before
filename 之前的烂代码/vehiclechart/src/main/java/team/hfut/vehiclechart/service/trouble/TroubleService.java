package team.hfut.vehiclechart.service.trouble;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.hfut.vehiclechart.bean.trouble.TroubleHistoryBean;
import team.hfut.vehiclechart.bean.trouble.TroubleMapBean;
import team.hfut.vehiclechart.bean.trouble.TroubleParamBean;
import team.hfut.vehiclechart.mapper.trouble.TroubleMapMapper;

@Service
public class TroubleService {

	@Resource
	private TroubleMapMapper troubleMapper;

	public List<Map<String, Object>> selectCountList(TroubleParamBean bean) {
		return troubleMapper.selectCountList(bean);
	}

	public List<TroubleMapBean> selectTroubleMap(TroubleParamBean bean) {
		return troubleMapper.selectTroubleMap(bean);
	}

	public List<Map<String, Object>> selectTroubleTree(TroubleParamBean bean) {
		return troubleMapper.selectTroubleTree(bean);
	}

	public List<TroubleHistoryBean> selectHistoryList(TroubleParamBean bean) {
		return troubleMapper.selectHistoryList(bean);
	}

}
