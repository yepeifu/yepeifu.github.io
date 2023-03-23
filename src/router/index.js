import React from 'react'
import { Redirect } from 'react-router-dom'
const Home = React.lazy(() => import('@/pages/home'))
const Login = React.lazy(() => import('@/pages/login'))
const HomeForm = React.lazy(() => import('@/pages/home/homeForm'))
const routes = [
    { path: '/', exact: true, render: () => <Redirect to="/login" /> },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
        routes: [
            { path: '/form', component: HomeForm },
        ]
    }
]

export default routes
