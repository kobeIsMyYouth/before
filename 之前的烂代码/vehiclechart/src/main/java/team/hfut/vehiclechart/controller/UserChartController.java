package team.hfut.vehiclechart.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import team.hfut.vehiclechart.service.userchart.UserChartService;

@RestController
@RequestMapping("/user")
public class UserChartController {

	@Resource
	private UserChartService userChartService;

	@RequestMapping("/getMapList")
	public List<Map<String,Object>> getMapList(@RequestParam(value = "province", required = true) String province) {
		return userChartService.selectUserMap(province);
	}
	
	@RequestMapping("/getCountList")
	public List<Map<String,Object>> selectCountList(@RequestParam(value = "province", required = true) String province) {
		return userChartService.selectCountList(province);
	}
	
	@RequestMapping("/getUserPos")
	public List<Map<String,Object>> selectUserPos(@RequestParam(value = "user_id", required = true) String user_id) {
		return userChartService.selectUserPos(user_id);
	}
	
	@RequestMapping("/getDrivingMileage")
	public List<Map<String,Object>> selectDrivingMileage(@RequestParam(value = "user_id", required = true) String user_id) {
		return userChartService.selectDrivingMileage(user_id);
	}
	
	@RequestMapping("/getChargingRate")
	public List<Map<String,Object>> selectChargingRate(@RequestParam(value = "user_id", required = true) String user_id) {
		return userChartService.selectChargingRate(user_id);
	}
	
	@RequestMapping("/getDrivingRate")
	public List<Map<String,Object>> selectDrivingRate(@RequestParam(value = "user_id", required = true) String user_id) {
		return userChartService.selectDrivingRate(user_id);
	}
	
	@RequestMapping("/getSafetyGrade")
	public List<Map<String,Object>> selectSafetyGrade(@RequestParam(value = "user_id", required = true) String user_id) {
		return userChartService.selectSafetyGrade(user_id);
	}

}
