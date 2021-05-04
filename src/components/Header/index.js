import React from 'react'
import style from './index.css'
import { history, Link } from 'umi'
import { Row, Col, Button, Space, Tag, Avatar, Typography } from 'antd'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'

const { Title } = Typography;
export default function header(props) {
    // console.log('headeer:',props);
    return (
        <Row justify='space-between'>
            <Col>
                <Title level={1} style={{color: '#fff', fontWeight:'500', lineHeight: '64px'}}>欢迎使用学生管理系统</Title>
            </Col>
            <Col>
                <Space size='middle'>
                    {
                        props.loginUser ? <><Avatar size='default' icon={<UserOutlined />} />
                            <Tag color="orange">{props.loginUser}</Tag>
                            <Button type='primary' onClick={() => {
                                props.onLogOut()
                                history.push('/login')
                            }}> 退出<LoginOutlined /></Button></> : <Link to='/login'>请先登录</Link>
                    }
                </Space>


            </Col>
        </Row>
    )
}
