package team.hfut.vehiclechart.mapper.usergroup;

import java.util.List;
import team.hfut.vehiclechart.bean.usergroup.UserGroupUserLabelBean;

public interface UserGroupUserLabelMapper {
	
	List<String> selectStrList(UserGroupUserLabelBean bean);

	List<UserGroupUserLabelBean> selectList(UserGroupUserLabelBean bean);

	int selectCount(UserGroupUserLabelBean bean);

	UserGroupUserLabelBean selectByPrimaryKey(Long id);

}
