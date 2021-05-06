import React, { useState } from 'react'
import { getAllStudents } from '../service'
import Avatar from '../components/Avatar'
import CityChoose from '../components/CityChoose'
import Carousel from '../components/Carousel'
import path1 from '../assets/1.jpg'
import path2 from '../assets/2.jpg'
import path3 from '../assets/3.jpg'
import {Image} from 'antd'
function index() {
    const [pathArr, setPathArr] = useState([path1,path2,path3])
    return (
        <>
            <h2>
                欢迎使用学生管理系统
            </h2>
        </>
    )
}
index.title = '首页'
index.wrappers = ['@/wrappers/auth', '@/wrappers/HandleTitle']
export default index;