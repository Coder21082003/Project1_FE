export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'users',
      displayName: 'menu.users',
      meta: {
        icon: 'group',
      },
    },
    {
      name: 'bookings',
      displayName: 'Bookings',
      meta: {
        icon: 'book',
      },
    },
    {
      name: 'managements',
      displayName: 'Management',
      meta: {
        icon: 'manage_accounts',
      },
      children: [
        {
          name: 'rooms',
          displayName: 'Rooms',
        },
        {
          name: 'services',
          displayName: 'Services',
        },
        {
          name: 'coupons',
          displayName: 'Coupons',
        },
        {
          name: 'blogs',
          displayName: 'Blogs',
        },
      ]
    },
    {
      name: 'payments',
      displayName: 'menu.payments',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'payment-methods',
          displayName: 'menu.payment-methods',
        },
        {
          name: 'pricing-plans',
          displayName: 'menu.pricing-plans',
        },
        {
          name: 'billing',
          displayName: 'menu.billing',
        },
      ],
    },
    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
      ],
    },
    // {
    //   name: '404',
    //   displayName: 'menu.404',
    //   meta: {
    //     icon: 'vuestic-iconset-files',
    //   },
    // },
    {
      name: 'preferences',
      displayName: 'menu.preferences',
      meta: {
        icon: 'manage_accounts',
      },
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      meta: {
        icon: 'settings',
      },
    },
    // {
    //   name: 'table-data',
    //   displayName: 'Table Data',
    //   meta: {
    //     icon: 'table_chart', // Bạn có thể chọn biểu tượng phù hợp
    //   },
    // },
  ] as INavigationRoute[],
}