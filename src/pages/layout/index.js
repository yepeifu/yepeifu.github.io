
import { Layout, Menu, theme, Skeleton } from 'antd';
import React, { useEffect, Suspense, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import "./Layout.less"
import Nav from "@/components/Nav"; // 面包屑导航组件
import * as navInfo from "./path"

const LayoutPage = (props) => {
    const { route } = props
    const { Header, Content, Sider } = Layout;
    // 一级菜单
    const topNav = navInfo.topNav
    // 二三级菜单
    const leftNavAll = navInfo.leftNavAll
    // 默认选择一级菜单
    const defaultSelectedKeys = ['/home']
    // 默认选择三级菜单

    const defaultSelectedKeysE = ['/home/form']
    // 默认展开二级菜单
    const openKeys = ['/home']
    const [leftNav, setLeftNav] = useState([
        {
            label: "ant-design",
            key: "/home",
            parentId: "/home",
            children: [
                { label: "ant-form", key: "/home/form", },
                { label: "ant-table", key: "/home/table" },
                { label: "ant-starknet", key: "/home/starknet" },
                // { path: '/home/starknet', component: Starknet },
            ]
        },
    ])
    // 添加默认歌曲ID(本地存储默认歌曲id)
    useEffect(() => {
        console.log('初始化')
    }, [])
    useEffect(() => {
        return () => {
            console.log('卸载')
        }
    }, [])
    // 本地存储读取歌曲列表ID
    useEffect(() => {
        console.log('更新dispatch')
    }, [])
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // 三级菜单点击事件
    const handleClick = (e) => {
        props.history.push(e.key)
    }
    const onOpenChange = (keys) => {
        console.log(keys)
    }
    // 一级菜单点击事件
    const handleClickMenu = (e) => {
        console.log(e)
        let leftNav = []
        leftNavAll.forEach(item => {
            if (e.key === item.parentId) {
                leftNav.push(item)
            }
        })
        setLeftNav(leftNav)
        props.history.push(e.key)
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={defaultSelectedKeys}
                    items={topNav}
                    onClick={handleClickMenu} />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={defaultSelectedKeysE}
                        defaultOpenKeys={openKeys}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={leftNav}
                        onClick={handleClick}
                        onOpenChange={onOpenChange}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    {/* 面包屑 */}
                    <Nav />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >

                        <HashRouter>
                            <Suspense fallback={<Skeleton active />}>{renderRoutes(route.routes)}</Suspense>
                        </HashRouter>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;