
import React from 'react'
import style from './index.css'
import Head from '../components/containers/HeaderContainer'
import Aside from '../components/Aside'
import Login from '../pages/login'
import Register from '../pages/register'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout;
export default function index(props) {
    // console.log(props);
    if (props.location.pathname === '/register') {
        return <Register />
    } else if (props.location.pathname === '/login') {
        return <Login />
    } else {
        return (
            <Layout >
                <Header >
                    <Head />
                </Header>
                <Layout>
                    <Sider>
                        <Aside />
                    </Sider>
                    <Content className={style.main}>
                        {props.children}
                    </Content>

                </Layout>
            </Layout>
        )
    }
}
