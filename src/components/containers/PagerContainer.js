// import Pager from '../common/Pager'
import {connect} from 'dva'
import { Pagination } from 'antd';
const mapStateToProps = (state, ownProps) => {
    return {
        current: state.students.condition.page,
        pageSize: state.students.condition.limit,
        total: state.students.result.total,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions:[10, 20, 30]
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (newPage) => {
            // console.log('newPage', newPage);
            dispatch({
                type: 'students/setCondition',
                payload:{
                    page: newPage
                }
            })
            // dispatch({
            //     type: 'students/fetchStudents'
            // })
        },
        onShowSizeChange(current, newPageSize){

            console.log('current:',current);
            dispatch({
                type: 'students/setCondition',
                payload:{
                    page: current,
                    limit: newPageSize
                }
            })
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)