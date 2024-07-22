//import Vue from 'vue'
//import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'
import Register from '../components/RegistrationForm.vue'
import Confirmation from '../components/ConfirmationDialog.vue'
import AppHeader from "@/components/AppHeader.vue";
import ContactPage from "@/components/ContactPage.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/confirmation',
        name: 'Confirmation',
        component: Confirmation
    },
    {
        path: '/appHeader',
        name: 'AppHeader',
        component: AppHeader
    },
    {
        path: '/contactPage',
        name: 'ContactPage',
        component: ContactPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

export default router
