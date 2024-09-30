// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import RouteViewComponent from '../layouts/RouterBypass.vue'
import Customer from '../components/customer/Customer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/customer',
    children: [
      {
        name: 'index',
        path: 'home',
        component: () => import('../pages/customer/home/home.vue'),
      },
      {
        name: 'booking',
        path: 'booking',
        component: () => import('../pages/customer/booking/booking.vue'),
      },
      {
        name: 'room',
        path: 'room',
        component: () => import('../pages/customer/room/room.vue'),
      },
      {
        name: 'room-detail',
        path: 'room-detail',
        component: () => import('../pages/customer/room/room-detail/room-detail.vue'),
      },
      {
        name: 'about',
        path: 'about',
        component: () => import('../pages/customer/about/about.vue'),
      },
    ],
  },

  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
      },
      {
        name: 'payments',
        path: '/payments',
        component: RouteViewComponent,
        children: [
          {
            name: 'payment-methods',
            path: 'payment-methods',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'billing',
            path: 'billing',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'pricing-plans',
            path: 'pricing-plans',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      {
        name: 'faq',
        path: '/faq',
        component: () => import('../pages/faq/FaqPage.vue'),
      },
      {
        name: 'table-data',
        path: 'table-data',
        component: () => import('../pages/table/TableData.vue'),
      },

      {
        name: 'managements',
        path: '/managements',
        component: RouteViewComponent,
        children: [
          {
            name: 'rooms',
            path: 'rooms',
            component: () => import('../pages/management/room.vue'),
          },
          {
            name: 'bookings',
            path: 'bookings',
            component: () => import('../pages/management/booking.vue'),
          },
          {
            name: 'services',
            path: 'services',
            component: () => import('../pages/management/service.vue'),
          },
          {
            name: 'coupons',
            path: 'coupons',
            component: () => import('../pages/management/coupon.vue'),
          },
          {
            name: 'blogs',
            path: 'blogs',
            component: () => import('../pages/management/blog.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'verify',
        path: 'verify',
        component: () => import('../pages/auth/Verify.vue'),
        props: true,
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
