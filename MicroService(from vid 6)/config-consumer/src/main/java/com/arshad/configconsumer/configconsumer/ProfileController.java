package com.arshad.configconsumer.configconsumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshad.configconsumer.configconsumer.model.MemberProfileConfiguration;

@Controller
public class ProfileController {


    @Autowired
    MemberProfileConfiguration memberProfileConfiguration;


    @RequestMapping("/profile")
    public String getConfig(Model model){

        model.addAttribute("model",memberProfileConfiguration.getDefaultModel());
        model.addAttribute("min",memberProfileConfiguration.getMinRentPeriod());
        model.addAttribute("discount",memberProfileConfiguration.getDiscountPrice());
        return "mprofile";

    }

}
