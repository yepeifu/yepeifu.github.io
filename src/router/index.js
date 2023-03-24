import React from 'react'
import { Redirect } from 'react-router-dom'
const Layout = React.lazy(() => import('@/pages/layout'))
const Login = React.lazy(() => import('@/pages/login'))
const HomeForm = React.lazy(() => import('@/pages/home/homeForm'))
const HomeTable = React.lazy(() => import('@/pages/home/homeTable'))
const routes = [
    { path: '/', exact: true, render: () => <Redirect to="/login" /> },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Layout,
        routes: [
            {
                path: '/home',
                exact: true,
                render: () => <Redirect to="/home/form" />,
            },
            { path: '/home/form', component: HomeForm },
            { path: '/home/table', component: HomeTable },
        ]
    }
]

export default routes
