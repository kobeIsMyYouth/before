package team.hfut.vehiclechart.service.userchart;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.hfut.vehiclechart.mapper.userchart.UserActivePosMapper;
import team.hfut.vehiclechart.mapper.userchart.UserChargingMapper;
import team.hfut.vehiclechart.mapper.userchart.UserChartMapMapper;
import team.hfut.vehiclechart.mapper.userchart.UserDrivingMileageMapper;
import team.hfut.vehiclechart.mapper.userchart.UserDrvingRateMapper;
import team.hfut.vehiclechart.mapper.userchart.UserSafetyGradeMapper;

@Service
public class UserChartService {

	@Resource
	private UserChartMapMapper userChartMapMapper;
	
	@Resource
	private UserActivePosMapper userActivePosMapper;
	
	@Resource
	private UserDrivingMileageMapper userDrivingMileageMapper;
	
	@Resource
	private UserChargingMapper userChargingMapper;
	
	@Resource
	private UserDrvingRateMapper userDrvingRateMapper;
	
	@Resource
	private UserSafetyGradeMapper userSafetyGradeMapper;
	
	public List<Map<String, Object>> selectCountList(String province) {
		return userChartMapMapper.selectCountList(province);
	}
	
	public List<Map<String, Object>> selectUserMap(String province) {
		return userChartMapMapper.selectResultList(province);
	}
	
	public List<Map<String, Object>> selectUserPos(String user_id) {
		return userActivePosMapper.selectResultList(user_id);
	}
	
	public List<Map<String, Object>> selectDrivingMileage(String user_id) {
		return userDrivingMileageMapper.selectResultList(user_id);
	}
	
	public List<Map<String, Object>> selectChargingRate(String user_id) {
		return userChargingMapper.selectResultList(user_id);
	}
	
	public List<Map<String, Object>> selectDrivingRate(String user_id) {
		return userDrvingRateMapper.selectResultList(user_id);
	}
	
	public List<Map<String, Object>> selectSafetyGrade(String user_id) {
		return userSafetyGradeMapper.selectResultList(user_id);
	}

}
