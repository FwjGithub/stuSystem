import Mock from "mockjs"
const stus = Mock.mock({
    msg: 'success',
    status: 200,
    'data|10': [
        {
            'id|+1': 1,
            'sNo|5': /\d/,
            'name': '@cname',
            'address': '@city',
            'birth|1980-2002': 0,
            'sex|1': [0, 1],
            'phone':/1\d{10}/,
            'email':  '@email',
            'ctime|1554049417-1564049417': 0,
            'utime|1554049417-1564049417': 0,


        }
    ]
})
// console.log(stus);
export default {
    'GET /api/student/findAll': stus
}