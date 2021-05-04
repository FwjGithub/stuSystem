import React from 'react'
import style from  './index.css'
import {history, Link} from 'umi'
export default function header(props) {
    // console.log('headeer:',props);
    return (
        <div className={style.header}>
            <h1 className={style.left}>学生管理</h1>
            <div className={style.right}>
                {
                    props.loginUser ? <><span>欢迎您</span>
                    <span>{props.loginUser}</span>
                    <button onClick={()=>{
                        props.onLogOut()
                        history.push('/login')
                    }}>退出登录</button></> : <Link to='/login'>请先登录</Link>
                }
                
            </div>
        </div>
    )
}
