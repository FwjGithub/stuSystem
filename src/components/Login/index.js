import React, { useState } from 'react'
import { useHistory, Link } from 'umi'
import style from './index.css'
import { connect } from 'dva'
import { Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { stuLogin } from '../../service'
function login(props) {
    const history = useHistory()
    const [loginId, setLoginId] = useState()
    const [loginPwd, setLoginPwd] = useState()
    // console.log('history', history);
    return (
        <div className={style.login}>
            <div>
                <Input value={loginId} onChange={(e) => {
                    console.log('e', e.target.value);
                    setLoginId(e.target.value)
                }} className={style.inp} prefix={<UserOutlined />} type="text" placeholder="账号" />
            </div>
            <div>
                <Input value={loginPwd} onChange={(e) => {
                    setLoginPwd(e.target.value)
                }} className={style.inp} prefix={<LockOutlined />} type="password" placeholder="密码" />
            </div>
            <div>
                <Button className={style.btn} type='link' onClick={()=>{history.push('/register')}}>尚未注册</Button>

                <Button className={style.btn} type='primary' onClick={() => {
                    if (!loginId) {
                        console.log('loginId', loginId);
                        message.warning('请输入账号', 1)
                        return;
                    } else if (!loginPwd) {
                        message.warning('请输入密码', 1)
                    }
                    stuLogin(loginId, loginPwd).then(resp => {
                        // console.log(resp);
                        if (resp.status === 'success') {
                            props.onSetLoginUser(loginId);
                            history.push('/')
                            message.success('登录成功' + loginId, 1)
                        } else {
                            message.error(resp.msg, 1.2)
                        }
                    })
                }}>登录</Button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetLoginUser: (loginId) => {
            dispatch({
                type: 'loginUser/setLoginUser',
                payload: loginId
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(login)