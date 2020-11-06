import Vue from 'vue';
import Router from 'vue-router'
import WelcomePage from "@/components/WelcomePage";
import AboutUsPage from "@/components/AboutUsPage";
import ContactUsPage from "@/components/ContactUsPage";
import LoginPage from "@/components/LoginPage";
import SignUpPage from "@/components/SignUpPage";
import ForgetPassword from "@/components/ForgetPassword";
import main from "@/components/MainPage/main";

import store from "@/vuex";
import ChangePasswordPage from "@/components/ChangePasswordPage";

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes:[
        {path: '/' , name:"WelcomePage", component: WelcomePage},
        {path: '/aboutUs' ,name: "AboutUsPage" , component: AboutUsPage},
        {path: '/contactUs' , name: "ContactUsPage" , component: ContactUsPage},
        {
            path: '/login' ,
            name : "LoginPage" ,
            component: LoginPage,

        },
        {path: '/register' , name: "SignUpPage", component: SignUpPage},
        {path: '/forgetPassword' , name: "ForgetPassword" , component: ForgetPassword},
        {path: '/ChangePassword' , name: "ChangePasswordPage" , component: ChangePasswordPage},
        {
            path: '/mainPage',
            component:  main,
            beforeEnter: (to, from, next)=>{
                if (!store.getters['user']){
                    return next({
                        name:"LoginPage"
                    })
                }
                next()
            }
        },
    ]
})
