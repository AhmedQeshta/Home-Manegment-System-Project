import Vue from 'vue';
import Router from 'vue-router'
import WelcomePage from "@/components/WelcomePage";
import AboutUsPage from "@/components/AboutUsPage";
import ContactUsPage from "@/components/ContactUsPage";
import LoginPage from "@/components/LoginPage";
import SignUpPage from "@/components/SignUpPage";
import ForgetPassword from "@/components/ForgetPassword";

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes:[
        {path: '/' , component: WelcomePage},
        {path: '/aboutUs' , component: AboutUsPage},
        {path: '/contactUs' , component: ContactUsPage},
        {path: '/login' , component: LoginPage},
        {path: '/register' , component: SignUpPage},
        {path: '/forgetPassword' , component: ForgetPassword},
    ]
})
