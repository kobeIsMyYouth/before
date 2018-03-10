package team.hfut.vehiclechart.mapper.userchart;

import java.util.List;
import java.util.Map;

import team.hfut.vehiclechart.bean.userchart.UserActivePosBean;

public interface UserActivePosMapper {

	List<Map<String, Object>> selectResultList(String user_id);

	List<UserActivePosBean> selectList(UserActivePosBean bean);

	int selectCount(UserActivePosBean bean);

	UserActivePosBean selectByPrimaryKey(Long id);

}
