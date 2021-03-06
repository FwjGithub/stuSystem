let appkey = 'Luffy_1581000453399';
appkey='demo13_1545210570249'
import qs from 'querystring'

// "http://open.duyiedu.com/api/student/findAll?appkey=Luffy_1581000453399"
export async function getAllStudents(){
    return await fetch("/api/student/findAll?appkey=" + appkey)
                    .then(resp => resp.json()).then(resp => resp.data);
}
export async function getStudentsByPage(page, limit) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page || 1}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data);
}
/**
 * 按照关键词查询学生
 * @param {} param0 
 */
export async function searchStudents(
    {page = 1, limit = 10, key = '', sex = -1}
) {
    // console.log("key:", key);
    let resp = {};
    // console.log('limit,', limit);
    if(key !== ''){
        resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page || 1}&size=${limit}&search=${key}&sex=${sex}`)
        .then(resp => resp.json()).then(resp => resp.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        // console.log(key);
        return resp;
    }
    resp = await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page || 1}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data);
    resp.datas = resp.findByPage;
    delete resp.findByPage;

    return resp;
}

export async function addStudent(stuObj){
    const stuStr = qs.stringify(stuObj)
    // console.log(stuStr);
    // /api/student/addStudent
    return await fetch(`/api/student/addStudent?appkey=${appkey}&${stuStr}`)
        .then(resp => resp.json());
}
export async function updateStudent(stuObj){
    const stuStr = qs.stringify(stuObj)
    // console.log(stuStr);
    // /api/student/addStudent
    return await fetch(`/api/student/updateStudent?appkey=${appkey}&${stuStr}`)
        .then(resp => resp.json());
}
export async function getStudentBySNo(sNo, page, limit){
    // const stus =  await getAllStudents();
    // console.log(page, limit);
    const stus =  await getStudentsByPage(page, limit);

    // console.log(stus);
    return stus.findByPage.find(item => item.sNo === sNo)
}

export async function getRegion(parentId = null){
    let url = '/api/local'
    if(parentId){
        url += `?parentId=${parentId}`
    }
    const resp =  await fetch(url).then(resp => resp.json)
    return resp;
}

export async function stuLogin(account, password){
    const url = `/api/student/stuLogin?appkey=${appkey}&account=${account}&password=${password}`
    console.log('url', url);
    const resp = await fetch(url, {
        method: 'POST'
    }).then(resp => resp.json())
    // console.log(resp);
    return resp;
}
export async function stuRegister(account,username, password, rePassword){
    const url = `/api/student/stuRegister?appkey=${appkey}&account=${account}&username=${username}&password=${password}&rePassword=${rePassword}`
    console.log('url', url);
    const resp = await fetch(url, {
        method: 'POST'
    }).then(resp => resp.json())
    // console.log(resp);
    return resp;
}