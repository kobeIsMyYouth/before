package team.hfut.vehiclechart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {

	@RequestMapping("/")
	public String greeting(@RequestParam(value = "name", required = false, defaultValue = "${page.home}") String homepage, Model model) {
		if (homepage !=null && homepage.trim().length() > 0) {
			return homepage;
		}
		return "index";
	}

}
