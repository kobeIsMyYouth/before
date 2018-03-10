package team.hfut.vehiclechart.mapper.userchart;

import java.util.List;
import java.util.Map;

public interface UserChargingMapper {

	List<Map<String, Object>> selectResultList(String user_id);

}
