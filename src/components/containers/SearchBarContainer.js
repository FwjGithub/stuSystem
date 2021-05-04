import SearchBar from '../SearchBar'
import {connect} from 'dva'
const mapStateToProps = (state, ownProps) => {
    return {
            searchKey: state.students.condition.key,
            sex: state.students.condition.sex
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: (newcondition) => {
            newcondition.page = 1
            dispatch({
                type: 'students/setCondition',
                payload: newcondition
            })
            // dispatch({
            //     type: 'students/fetchStudents'
            // })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)