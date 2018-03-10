package team.hfut.vehiclechart.mapper.trouble;

import java.util.List;
import java.util.Map;

import team.hfut.vehiclechart.bean.trouble.TroubleHistoryBean;
import team.hfut.vehiclechart.bean.trouble.TroubleMapBean;
import team.hfut.vehiclechart.bean.trouble.TroubleParamBean;

public interface TroubleMapMapper {
	
	List<Map<String, Object>> selectCountList(TroubleParamBean bean);

	List<TroubleMapBean> selectTroubleMap(TroubleParamBean bean);

	List<Map<String, Object>> selectTroubleTree(TroubleParamBean bean);

	List<TroubleHistoryBean> selectHistoryList(TroubleParamBean bean);

}
