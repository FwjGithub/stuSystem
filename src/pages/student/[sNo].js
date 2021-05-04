import React, { useState, useEffect } from 'react'
import { useParams } from 'umi'
import StudentForm from '@/components/StudentForm'
import { updateStudent, getStudentBySNo } from '../../service'
import { Spin } from 'antd'
export default function id(props) {
    const param = useParams()
    // console.log(param.sNo);
    const [isLoading, setIsLoading] = useState(false)
    async function handleSubmit(stuObj) {
        console.log(stuObj);
        const resp = await updateStudent(stuObj)
        console.log(resp)
    }
    // useEffect(()=>{
    //     // console.log('sNo:',param.sNo);
    //      getStudentBySNo(param.sNo).then(resp => {
    //         console.log('resp:', resp);
    //     });
    // })
    // const [isLoading, setIsLoading] = useState(false)
    // const history = useHistory()
    // async function handleSubmit(stuObj) {
    //     // console.log(stuObj);
    //     setIsLoading(true)
    //     const resp = await addStudent(stuObj);
    //     setIsLoading(false)
    //     if(resp.status === 'success'){
    //         await message.success('添加学生成功', 0.6)
    //         history.push('/student')
    //     }else{
    //         await message.error(resp.msg, 2)
    //     }
    //     // console.log(resp);
    // }
    return (
        <div>
            <Spin tip='修改中...' spinning={isLoading} >
                <StudentForm onSubmit={handleSubmit}  />
            </Spin>
        </div>
    )
}