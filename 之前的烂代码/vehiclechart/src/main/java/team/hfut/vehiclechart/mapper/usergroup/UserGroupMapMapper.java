package team.hfut.vehiclechart.mapper.usergroup;

import java.util.List;
import team.hfut.vehiclechart.bean.usergroup.UserGroupMapBean;

public interface UserGroupMapMapper {

	List<UserGroupMapBean> selectList(UserGroupMapBean bean);

	int selectCount(UserGroupMapBean bean);

	UserGroupMapBean selectByPrimaryKey(Long id);
	
	List<String> selectUserType();

}
