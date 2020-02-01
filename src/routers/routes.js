import React from 'react'
import Loadable from 'react-loadable'
import Loader from 'components/Common/Loader'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => <Loader />,
  })

export const routes = [
  {
    path: '/',
    breadcrumbName: 'Cover',
    Component: loadable(() => import('pages/cover')),
    exact: true,
  },
  {
    path: '/login',
    breadcrumbName: 'login',
    Component: loadable(() => import('pages/user/login')),
    exact: true,
  },
  {
    path: '/home',
    breadcrumbName: 'Home',
    Component: loadable(() => import('pages/Home/Home')),
    exact: true,
  },
  {
    path: '/dashboard',
    breadcrumbName: 'Dashboard',
    Component: loadable(() => import('pages/dashboard')),
    auth: true,
    children: [
      {
        path: '/find',
        breadcrumbName: 'Find',
        Component: loadable(() => import('pages/dashboard/find')),
        auth: true,
      },
    ],
  },
  {
    path: '/second',
    breadcrumbName: 'second',
  },
]

export default {
  routes,
}
