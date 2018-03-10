package team.hfut.vehiclechart.mapper.userchart;

import java.util.List;
import java.util.Map;

import team.hfut.vehiclechart.bean.userchart.UserChartMapBean;

public interface UserDrvingRateMapper {

	List<Map<String, Object>> selectResultList(String province);

	List<UserChartMapBean> selectList(UserChartMapBean bean);

	int selectCount(UserChartMapBean bean);

	UserChartMapBean selectByPrimaryKey(Long id);

}
