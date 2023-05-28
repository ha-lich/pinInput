import { lazy } from 'react';

export const routeConfig = [
  {
    id: "Register",
    path: "/register",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "@pages/register"),
    ),
    isProtected: false,
  },
  {
    id: 'Login',
    path: '/login',
    component: lazy(
      () => import(/* webpackPrefetch: true */ '@pages/login'),
    ),
    isProtected: false,
  },
  {
    id: 'Home',
    path: '/',
    component: lazy(
      () => import(/* webpackPrefetch: true */ '@pages/home'),
    ),
    isProtected: false,
  },
];
