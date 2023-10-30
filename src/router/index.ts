import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../views/Login.vue'
import DashboardVue from '../views/Dashboard.vue'
import FormsVue from '../views/Forms.vue'
import CardVue from '../views/Card.vue'
import TablesVue from '../views/Tables.vue'
import UIElementsVue from '../views/UIElements.vue'
import ModalVue from '../views/Modal.vue'
import BlankVue from '../views/Blank.vue'
import useAuthUser from '../composables/useAuthUser'



const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: LoginVue,
        meta: { layout: 'empty' },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardVue,
        meta: {
            requiresAuth: true
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useAuthUser();
    if ((to.meta.requiresAuth || !router.hasRoute(to.name as string)) && !isAuthenticated()) {
        next('/');
    }
    if ((to.name === 'Login' || !router.hasRoute(to.name as string)) && isAuthenticated()) {
        next('/dashboard');
        return
    }
    next();

});


export default router
