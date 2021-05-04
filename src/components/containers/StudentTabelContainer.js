import StudentsTable from '../StudentsTable'
// import {  } from 'antd'
import { connect } from 'dva'
import { NavLink} from 'umi'
const mapStateToProps = (state, ownProps) => {
    // const history = useHistory();
    const dataSource = state.students.result.datas.map(item => {
        return {
            key: item.id,
            sNo: item.sNo,
            name: item.name,
            sex: item.sex,
            email: item.email,
            phone: item.phone,
            address: item.address
        }
    })
    //遍历学生数据的属性来得到columns
    // const columns = []
    // if (state.students.result.datas.length === 0) {
    //     return {
    //         dataSource,
    //         columns
    //     }
    // }
    // const aStudent = state.students.result.datas[0];
    // for (const key in aStudent) {
    //     console.log(key);
    //     if (key === 'id' || key === 'ctime' || key === 'utime' || key === 'appkey' || key === 'birth') {
    //         continue;
    //     }
    //     if(key=== 'sex'){
    //         columns.push({
    //             title: key,
    //             dataIndex: key,
    //             render(sex){
    //                 console.log(sex);
    //                 return sex === 1 ? '女' : '男'
    //             }
    //         })
    //         continue;
    //     }
    //     columns.push({
    //         title: key,
    //         dataIndex: key
    //     })
    // }
    //直接写columns
    const columns = [
        {
            title: '学号',
            dataIndex: 'sNo'
        }, {
            title: '姓名',
            dataIndex: 'name'
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                // console.log(sex);
                return sex === 1 ? '女' : '男'
            }
        }, {
            title: '地址',
            dataIndex: 'address'
        }, {
            title: '邮箱',
            dataIndex: 'email'
        }, {
            title: '手机号',
            dataIndex: 'phone'
        }, {
            title: '详情',
            dataIndex: 'sNo',
            render(sNo) {
                return <NavLink to={`/student/${sNo}`}>详情</NavLink>
            }
        }
    ]
    return {
        dataSource,
        columns,
        current: state.students.condition.page,
        pageSize: state.students.condition.limit,
        total: state.students.result.total,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: [10, 20, 30],

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
export default connect(mapStateToProps, mapDispatchToProps)(StudentsTable)