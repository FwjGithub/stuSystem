import Modal from '../../components/common/Modal'
// import { Spin } from 'antd';
import {connect} from 'dva'
const mapStateToProps = (state, ownProps) => {
    return {
        show: !!state.loading.models.students
    }
}
export default connect(mapStateToProps)(Modal)