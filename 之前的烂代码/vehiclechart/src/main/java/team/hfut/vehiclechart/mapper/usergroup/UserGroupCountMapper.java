package team.hfut.vehiclechart.mapper.usergroup;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import team.hfut.vehiclechart.bean.usergroup.UserGroupCountBean;

public interface UserGroupCountMapper {

	List<Map<String, Object>> selectCountList(@Param("user_type") String user_type);

	List<UserGroupCountBean> selectList(UserGroupCountBean bean);

	int selectCount(UserGroupCountBean bean);

	UserGroupCountBean selectByPrimaryKey(Long id);

}
