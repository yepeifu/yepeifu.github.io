import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Skeleton } from 'antd';
import React, { useEffect, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import "./Layout.less"
import Nav from "@/components/Nav"; //面包屑导航组件
const { Header, Content, Sider } = Layout;
const topNav = [
    {
        label: "一级菜单", key: "11"
    }
]
const leftNav = [
    {
        label: "二级菜单1",
        key: "21",
        children: [
            { label: "三级菜单1", key: "/home/form", },
            { label: "三级菜单2", key: "32" },
            { label: "三级菜单3", key: "33" }
        ]
    },
    {
        label: "二级菜单2",
        key: "212",
        children: [
            { label: "三级菜单12", key: "312" },
            { label: "三级菜单22", key: "322" },
            { label: "三级菜单32", key: "332" }
        ]
    },
]
const defaultSelectedKeys = ['11']
const defaultSelectedKeysE = ['/home/form']
const openKeys = ['21']
const LayoutPage = (props) => {
    const { route } = props
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
    const handleClick = (e) => {
        props.history.push(e.key)

    }
    const onOpenChange = (keys) => {
        console.log(keys)

    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={defaultSelectedKeys} items={topNav} />
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