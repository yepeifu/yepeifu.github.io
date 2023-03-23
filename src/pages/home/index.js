import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect } from 'react';
// import routes from '@/router'
// import { HashRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config'
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const LayoutPage = (props) => {
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
        props.history.push("/home/form")

    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                        onClick={handleClick}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {/* <HashRouter>
                            <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
                        </HashRouter> */}

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;