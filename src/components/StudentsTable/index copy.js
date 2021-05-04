import React from 'react'
import {Link} from 'umi'
import style from  './index.css'

export default function StudentsTable({students}) {
    if(!students || students.length===0){
        return null;
    }
    const trs = students.datas.map(stu => (
        <tr key={stu.id}>
            <td>{stu.sNo}</td>
            <td>{stu.name}</td>
            <td>{stu.sex === 0 ? '男': "女"}</td>
            <td>{stu.email}</td>
            <td>{stu.phone}</td>
            <td><Link to={`/student/${stu.sNo}`}>详情</Link></td>
        </tr>
    ))
    return (
        <table className={style.table}>
                <thead>
                    <tr>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>邮箱</th>
                        <th>电话</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
    )
}
