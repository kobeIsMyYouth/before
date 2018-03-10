package team.hfut.vehiclechart.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.hfut.vehiclechart.bean.usergroup.UserGroupDrivingTypeBean;
import team.hfut.vehiclechart.bean.usergroup.UserGroupMapBean;
import team.hfut.vehiclechart.bean.usergroup.UserGroupUserLabelBean;
import team.hfut.vehiclechart.service.usergroup.UserGroupService;

@RestController
@RequestMapping("/usergroup")
public class UserGroupController {

	@Resource
	private UserGroupService UserGroupService;

	@RequestMapping("/getMapList")
	public List<UserGroupMapBean> getMapList(UserGroupMapBean bean) {
		return UserGroupService.selectMapList(bean);
	}

	@RequestMapping("/getUserType")
	public List<String> selectUserType() {
		return UserGroupService.selectUserType();
	}

	@RequestMapping("/getDrivingType")
	public List<Map<String, Object>> selectDrivingType(UserGroupDrivingTypeBean bean) {
		return UserGroupService.selectTreeList(bean);
	}

	@RequestMapping("/getUserGroupLabel")
	public List<String> selectUserGroupLabel(UserGroupUserLabelBean bean) {
		return UserGroupService.selectUserGroupLabel(bean);
	}

	@RequestMapping("/getUserCountLabel")
	public List<Map<String, Object>> selectUserCountLabel(String user_type) {
		return UserGroupService.selectUserCountLabel(user_type);
	}

}
