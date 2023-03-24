import React from 'react'
import { Redirect } from 'react-router-dom'
const Layout = React.lazy(() => import('@/pages/layout'))
const Login = React.lazy(() => import('@/pages/login'))
const HomeForm = React.lazy(() => import('@/pages/home/homeForm'))
const HomeTable = React.lazy(() => import('@/pages/home/homeTable'))
const ByValue = React.lazy(() => import('@/pages/byValue'))
const routes = [
    { path: '/', exact: true, render: () => <Redirect to="/login" /> },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Layout,
        routes: [
            {
                path: '/home',
                exact: true,
                render: () => <Redirect to="/home/form" />,
            },
            { path: '/home/form', component: HomeForm },
            { path: '/home/table', component: HomeTable },
            { path: '/home/table', component: HomeTable },
            {
                path: '/byValue',
                exact: true,
                render: () => <Redirect to="/byValue/components" />,
            },
            { path: '/byValue/components', component: ByValue },
        ]
    }
]

export default routes
