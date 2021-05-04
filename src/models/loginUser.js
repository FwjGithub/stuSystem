export default {
    state: null,
    reducers: {
        setLoginUser(state, {payload}){
            // console.log(payload)
            
            localStorage.setItem('loginId', payload)
            return payload;
        },
        logOut(state){
            localStorage.removeItem('loginId')
            return null;
        }
    },
    subscriptions: {
        checkIsLog({dispatch}){
            const loginId = localStorage.getItem('loginId')
            // console.log('loginId', loginId);
            if(!loginId){
                return;
            }
            dispatch({
                type: 'setLoginUser',
                payload: loginId
            })
        }
    }
}