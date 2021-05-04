import React, { useState } from 'react'
import StudentForm from '@/components/StudentForm'
import { addStudent } from '../../service'
import { Spin, message } from 'antd'
import {useHistory} from 'umi'
function add() {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(stuObj) {
        // console.log(stuObj);
        setIsLoading(true)
        const resp = await addStudent(stuObj);
        setIsLoading(false)
        if(resp.status === 'success'){
            await message.success('添加学生成功', 0.6)
            history.push('/student')
        }else{
            await message.error(resp.msg, 2)
        }
        // console.log(resp);
    }
    return (
        <div>
            <Spin spinning={isLoading} tip='添加中...'>
                <StudentForm onSubmit={handleSubmit} />
            </Spin>
        </div>
    )
}
add.title = '添加学生页'
add.wrappers = ['@/wrappers/auth', '@/wrappers/HandleTitle']
export default add;