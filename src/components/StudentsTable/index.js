import React from 'react'
import {Link} from 'umi'
// import style from  './index.css'
import {Table} from 'antd'
export default function StudentsTable({dataSource, columns, ...rest}) {
    // if(!students || students.length===0){
    //     return null;
    // }
    // console.log(rest);
    return (
        <Table dataSource={dataSource} columns={columns} pagination={rest} ></Table>
    )
}
