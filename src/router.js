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
import ProfileUser from "@/components/MainPage/ProfileUser";
import AddDevices from "@/components/MainPage/AddDevices";
import PageNotFound from "@/components/ErrorsPages/PageNotFound";

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
            // already be login 
            beforeEnter: (to, from, next)=>{
                // if (localStorage.getItem('token') != null){
                    if (store.getters['user']){
                        return next({
                            name:"WelcomePage"
                        })
                    }
                // }

                next()
            }

        },
        {
            path: '/register' ,
            name: "SignUpPage",
            component: SignUpPage,
            // already be login
            beforeEnter: (to, from, next)=>{
                if (store.getters['user']){
                    return next({
                        name:"WelcomePage"
                    })
                }

                next()
            }
        },
        {
            path: '/forgetPassword' ,
            name: "ForgetPassword" ,
            component: ForgetPassword,
            // already be login
            beforeEnter: (to, from, next)=>{
                if (store.getters['user']){
                    return next({
                        name:"WelcomePage"
                    })
                }

                next()
            }
        },
        {
            path: '/ChangePassword' ,
            name: "ChangePasswordPage" ,
            component: ChangePasswordPage,
            // already be login
            beforeEnter: (to, from, next)=>{
                if (store.getters['user']){
                    return next({
                        name:"WelcomePage"
                    })
                }

                next()
            }
        },
        {
            path: '/mainPage',
            name: "mainPage" ,
            component:  main,
            // must be login
            beforeEnter: (to, from, next)=>{
                // if (localStorage.getItem('token') == null){
                if (!store.getters['user']){
                    return next({
                        name:"LoginPage"
                    })
                }
                // }

                next()
            }
        },
        {
            path: '/mainPage/Profile/user',
            name: "ProfileUser" ,
            component:  ProfileUser,
            // must be login
            beforeEnter: (to, from, next)=>{
                // if (localStorage.getItem('token') == null){
                if (!store.getters['user']){
                    return next({
                        name:"LoginPage"
                    })
                }
                // }

                next()
            }
        },
        {
            path: '/mainPage/add-device',
            name: "AddDevices" ,
            component:  AddDevices,
            // must be login
            beforeEnter: (to, from, next)=>{
                // if (localStorage.getItem('token') == null){
                if (!store.getters['user']){
                    return next({
                        name:"LoginPage"
                    })
                }
                // }

                next()
            }
        },

    //    error page 404
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound,
        },
    ]
})
