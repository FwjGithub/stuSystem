import {withRouter, Redirect} from 'umi'
import {Button} from 'antd'
function HandleLogin({children, history}) {
    const loginId = localStorage.getItem("loginId")
    // console.log('children', loginId);

    if(loginId){
        return children;
    }
    else{
        return (<>
            <Button type='link' onClick={()=>[
              history.push('/login')
            ]}>请先登录，点击登录</Button>
        </>)
    }
    // return <Redirect to='/login' />

}
export default withRouter(HandleLogin)