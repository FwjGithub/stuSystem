import {withRouter, Redirect} from 'umi'
function HandleLogin({children, history}) {
    const loginId = localStorage.getItem("loginId")
    // console.log('children', loginId);

    if(loginId){
        return children;
    }
    else{
        return (<>
            <div>你好，请先登录</div>
            <button onClick={()=>[
              history.push('/login')
            ]}>点击跳转到登录页面</button>
        </>)
    }
    // return <Redirect to='/login' />

}
export default withRouter(HandleLogin)