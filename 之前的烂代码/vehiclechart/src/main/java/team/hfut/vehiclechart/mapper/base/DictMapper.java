package team.hfut.vehiclechart.mapper.base;

import java.util.List;
import team.hfut.vehiclechart.bean.base.DictBean;

public interface DictMapper {

	List<DictBean> selectList(DictBean bean);

	int selectCount(DictBean bean);

	DictBean selectByPrimaryKey(String id);

	int insertSelective(DictBean bean);

	int updateByKeySelective(DictBean bean);

	int deleteByPrimaryKey(String id);

	int deleteSelective(DictBean bean);

	List<DictBean> selectByParentId(String pid);
	
	List<DictBean> selectChildTree(String pid);

}
