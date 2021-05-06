import React, { useState } from 'react'
import { useHistory, Link } from 'umi'
import style from './index.css'
import { Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { stuRegister } from '../../service'
export default function register(props) {
    const history = useHistory()
    const [account, setAccount] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()

    // console.log('history', history);
    return (
        <div className={style.login}>
            <div>
                <Input value={account} onChange={(e) => {
                    console.log('e', e.target.value);
                    setAccount(e.target.value)
                }} className={style.inp} addonBefore='账号'  type="text" placeholder="4~16位数字" />
            </div>
            <div>
                <Input value={username} onChange={(e) => {
                    console.log('e', e.target.value);
                    setUsername(e.target.value)
                }} className={style.inp} addonBefore='昵称' type="text" placeholder="任意字符" />
            </div>
            <div>
                <Input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} className={style.inp}addonBefore='密码' type="password" placeholder="6~18位字符" />
            </div>
            <div>
                <Input value={rePassword} onChange={(e) => {
                    setRePassword(e.target.value)
                }} className={style.inp} addonBefore='确认密码' type="password" placeholder="两次填写的密码必须一致" />
            </div>
            <div>
                <Button type='link' onClick={()=>{history.push('/login')}}>已注册，去登录</Button>
                <Button className={style.btn} type='primary' onClick={() => {
                    if (!account) {
                        message.warning('请填写账号', 1)
                        return;
                    } else if (!username) {
                        message.warning('请填写用户名', 1)
                        return
                    }
                    else if (!password) {
                        message.warning('请填写密码', 1)
                        return
                    } else if (password !== rePassword) {
                        message.warning('两次密码不一致', 1)
                        return
                    } else {
                        stuRegister(account,username,password,rePassword).then(resp => {
                            // console.log(resp);
                            if (resp.status === 'success') {
                                history.push('/login')
                                message.success('注册成功' + account, 1)
                            } else {
                                message.error(resp.msg, 1.2)
                            }
                        })
                    }
                    
                }}>点击注册</Button>
            </div>
        </div>
    )
}
