import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'umi'
import StudentForm from '@/components/StudentForm'
import { updateStudent, getStudentBySNo } from '../../service'
import { Spin, message } from 'antd'
export default function id(props) {
    const param = useParams()
    const history = useHistory()
    const location = useLocation()

    // console.log(param.sNo);
    const [isLoading, setIsLoading] = useState(false)
    const [stuObj, setStuObj] = useState({})
    async function handleSubmit(stuObj) {
        console.log('stuObj', stuObj);
        setIsLoading(true)
        const resp = await updateStudent(stuObj)
        if (resp.status === 'success') {
            setIsLoading(false)
            history.push('/student')
            await message.success('修改学生成功', 0.8)
        } else {
            await message.error(resp.msg, 2)
        }
        console.log('resp', resp)
    }
    //由于后端接口有一些问题，根据学号查询学生的时候要传一下当前第几页和页容量
    useEffect(() => {
        // console.log('sNo:',param.sNo);

        getStudentBySNo(param.sNo, location.query.page, location.query.limit).then(resp => {
            // console.log('resp:', resp);
            delete resp.ctime;
            delete resp.utime;
            delete resp.appkey;
            delete resp.id;
            setStuObj(resp)
        });
    }, [])
    return (
        <div>
            <Spin tip='修改中...' spinning={isLoading} >
                <StudentForm initVal={stuObj} onSubmit={handleSubmit} />
            </Spin>
        </div>
    )
}