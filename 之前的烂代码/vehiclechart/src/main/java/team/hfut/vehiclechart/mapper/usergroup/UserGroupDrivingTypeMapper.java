package team.hfut.vehiclechart.mapper.usergroup;

import java.util.List;
import java.util.Map;

import team.hfut.vehiclechart.bean.usergroup.UserGroupDrivingTypeBean;

public interface UserGroupDrivingTypeMapper {
	
	List<Map<String, Object>> selectTreeList(UserGroupDrivingTypeBean bean);
	
	List<String> selectStrList(UserGroupDrivingTypeBean bean);

	List<UserGroupDrivingTypeBean> selectList(UserGroupDrivingTypeBean bean);

	int selectCount(UserGroupDrivingTypeBean bean);

	UserGroupDrivingTypeBean selectByPrimaryKey(Long id);

}
