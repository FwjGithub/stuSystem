import React from 'react'
import style from './index.css'
import { NavLink } from 'umi'
import { Menu } from 'antd';
import {useLocation} from 'umi'

const { SubMenu } = Menu;

export default function aside(props) {
    // console.log(props);
    const location = useLocation()
    // console.log(location);
    return (
        <Menu
            //默认选中的菜单项，因为每一个菜单项的key是对应的页面路径，所以默认选中的菜单项为location.pathname
            defaultSelectedKeys={[location.pathname]}

            //默认展开的子菜单组，因为每一个子菜单组的key是对应的页面的首页路径（学神管理首页是/student）
            //如果打开的路径包含学生，就默认展开/student这个子菜单组
            defaultOpenKeys={[location.pathname.includes('/student') &&  '/student' ]}

            mode="inline"
            theme="dark"
        >
            <Menu.Item key='/'><NavLink exact to='/'>
                欢迎页面
            </NavLink></Menu.Item>
            <SubMenu key='/student' title='学生管理'>
                <Menu.Item key='/student'><NavLink exact to='/student'>
                    学生首页
                </NavLink></Menu.Item>

                <Menu.Item key='/student/add'><NavLink exact to='/student/add'>
                    添加学生页
            </NavLink></Menu.Item>
            </SubMenu>

        </Menu>
    )
}
