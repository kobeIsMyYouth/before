package team.hfut.vehiclechart.service.base;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import team.hfut.vehiclechart.mapper.base.DictMapper;
import team.hfut.vehiclechart.bean.base.DictBean;

@Service
public class DictService {

	@Resource
	private DictMapper dictMapper;

	public List<DictBean> selectList(DictBean bean) {
		return dictMapper.selectList(bean);
	}

	public int selectCount(DictBean bean) {
		return dictMapper.selectCount(bean);
	}

	public DictBean selectByPrimaryKey(String id) {
		return dictMapper.selectByPrimaryKey(id);
	}

	public int insertSelective(DictBean bean) {
		return dictMapper.insertSelective(bean);
	}

	public int updateByKeySelective(DictBean bean) {
		return dictMapper.updateByKeySelective(bean);
	}

	public int deleteByPrimaryKey(String id) {
		return dictMapper.deleteByPrimaryKey(id);
	}

	public int deleteSelective(DictBean bean) {
		return dictMapper.deleteSelective(bean);
	}

	public List<DictBean> selectByParentId(String pid) {
		return dictMapper.selectByParentId(pid);
	}
	
	public List<DictBean> selectChildTree(String pid) {
		return dictMapper.selectChildTree(pid);
	}

}
