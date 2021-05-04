import React, {useRef} from 'react'
import {useHistory} from 'umi'
import style from './index.css'
import {connect} from 'dva'
function login(props) {
    const loginIdRef = useRef()
    const loginPwdRef = useRef()
    const history = useHistory()
    // console.log('history', history);
    return (
        <div className={style.login}>
            <div>
                <input type="text" placeholder="输入loginId" ref={loginIdRef}/>
            </div>
            <div>
                <input type="text" placeholder="输入loginPwd" ref={loginPwdRef}/>
            </div>
            <button onClick={()=>{
                const loginId = loginIdRef.current.value
                const loginPwd = loginPwdRef.current.value
                if(!loginId || !loginPwd){
                    return;
                }
                props.onSetLoginUser(loginId);
                history.push('/')
            }}>登录</button>
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