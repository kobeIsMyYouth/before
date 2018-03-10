package team.hfut.vehiclechart.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/view")
public class ViewController {

	private Logger logger = Logger.getLogger(ViewController.class);

	@RequestMapping("/usergroups")
	public String usergroups() {
		return "usergroups";
	}

	@RequestMapping("/user")
	public String user(Model model, @RequestParam(value = "province", required = true) String province) {
		logger.info(province);
		model.addAttribute("province", province);
		return "user";
	}

	@RequestMapping("/trouble")
	public String trouble() {
		return "trouble";
	}
}
