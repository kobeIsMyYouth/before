package team.hfut.vehiclechart.service.usergroup;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import team.hfut.vehiclechart.bean.usergroup.UserGroupCountBean;
import team.hfut.vehiclechart.bean.usergroup.UserGroupDrivingTypeBean;
import team.hfut.vehiclechart.bean.usergroup.UserGroupMapBean;
import team.hfut.vehiclechart.bean.usergroup.UserGroupUserLabelBean;
import team.hfut.vehiclechart.mapper.usergroup.UserGroupCountMapper;
import team.hfut.vehiclechart.mapper.usergroup.UserGroupDrivingTypeMapper;
import team.hfut.vehiclechart.mapper.usergroup.UserGroupMapMapper;
import team.hfut.vehiclechart.mapper.usergroup.UserGroupUserLabelMapper;

@Service
public class UserGroupService {

	@Resource
	private UserGroupMapMapper userGroupMapMapper;
	
	@Resource
	private UserGroupDrivingTypeMapper userGroupDrivingTypeMapper;
	
	@Resource
	private UserGroupUserLabelMapper userGroupUserLabelMapper;
	
	@Resource
	private UserGroupCountMapper userGroupCountMapper;

	/**
	 * 用户群地图展示数据
	 * @param bean
	 * @return
	 */
	public List<UserGroupMapBean> selectMapList(UserGroupMapBean bean) {
		return userGroupMapMapper.selectList(bean);
	}
	
	/**
	 * 查询用户类型
	 * @param bean
	 * @return
	 */
	public List<String> selectUserType() {
		return userGroupMapMapper.selectUserType();
	}
	
	public List<String> selectDrivingType(UserGroupDrivingTypeBean bean) {
		return userGroupDrivingTypeMapper.selectStrList(bean);
	}
	
	public List<String> selectUserGroupLabel(UserGroupUserLabelBean bean) {
		return userGroupUserLabelMapper.selectStrList(bean);
	}
	
	public List<Map<String,Object>> selectUserCountLabel(String user_type) {
		return userGroupCountMapper.selectCountList(user_type);
	}
	
	public List<Map<String, Object>> selectTreeList(UserGroupDrivingTypeBean bean) {
		return userGroupDrivingTypeMapper.selectTreeList(bean);
	}

}
