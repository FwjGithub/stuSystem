import {searchStudents} from '../service'
import {history } from 'umi'
import queryString  from 'querystring'
export default {
    state: {
        condition: {
            key: '',
            sex: -1,
            limit: 10,
            page: 1
        },
        result: {
            total: 0,
            datas: []
        }
    },
    reducers: {
        changeCondition(state, {payload}){
            
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state, {payload}){
            return {
                ...state,
                result: {
                    ...state.result,
                    total: payload.cont,
                    datas: payload.datas
                }
            }
        }
    },
    effects:{
        /**
         * 根据当前条件查询学生
         * @param {*} action 
         * @param {*} param1 
         */
        *fetchStudents(action, {put, select, call}){
            const condition = yield select(state => state.students.condition);
            // console.log("condition", condition);
            const result = yield call(searchStudents, condition);
            // console.log("result", result);
            yield put({
                type: 'setResult',
                payload: result
            });
        },
        *setCondition({payload}, {put, select}){
            let oldCondition = yield select(state => state.students.condition)
            console.log(oldCondition);
            let newCondition = {
                ...oldCondition,
                ...payload
            }
            const searchStr = queryString.stringify(newCondition)
            yield put({
                type: 'changeCondition',
                payload: newCondition
            })
            // console.log(searchStr);
            history.push('?' + searchStr);
        }
    },
    subscriptions: {
        // initStudents({dispatch}){
        //     dispatch({
        //         type: 'fetchStudents'
        //     })
        // },
        initListen({dispatch, history}){
            history.listen((newLocation)=>{
                const condition = newLocation.query;
                condition.page&&(condition.page = +condition.page) 
                condition.limit&&(condition.limit = +condition.limit) 
                condition.sex&&(condition.sex = +condition.sex) 
                // console.log(condition);

                dispatch({
                    type: 'changeCondition',
                    payload: condition
                })
                dispatch({
                    type: 'fetchStudents'
                })
            })
        }

    }
}