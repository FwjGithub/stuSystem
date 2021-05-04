import React from 'react'
import style from './index.css'
import { NavLink } from 'umi'
export default function aside() {
    return (
        <ul className={style.aside}>
            <li><NavLink exact activeClassName={style.active} to='/'>
                欢迎页面
            </NavLink></li>
            <li><NavLink exact activeClassName={style.active} to='/student'>
                学生首页
            </NavLink></li>

            <li><NavLink exact activeClassName={style.active} to='/student/add'>
                添加学生页
            </NavLink></li>
        </ul>
    )
}
