import Header from '../Header'
import {connect} from 'dva'

const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogOut: () => {
            dispatch({
                type: 'loginUser/logOut'
            })
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)