// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";

export default class DashboardController {

    async show({view}){
        
        return view.render("home")
    }
}
