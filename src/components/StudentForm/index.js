import React from 'react'
import { Form, Input, Button, Radio, Select } from 'antd'
const { useForm } = Form;
export default function StudentForm(props) {
    const [form] = useForm()
    // console.log(form);
    const handleSubmit = (value) => {
        // console.log(value);
        props.onSubmit && props.onSubmit(value);
    }
    const createOptions = () => {
        const options = []
        for (let i = 2010; i > 1900; i--) {
            options.push(<Select.Option key={i} >{i}</Select.Option>)

        }
        return options;
    }
    return (
        <Form form={form} initialValues={{}} onFinish={handleSubmit} labelCol={{ span: 2 }} wrapperCol={{ span: 16, offset: 1 }}>
            <Form.Item name='sNo' disabled={!!props.sNo} label='学号' rules={[
                {
                    required: true,
                    message: '请输入你的学号'
                }
            ]} >
                <Input />
            </Form.Item>
            <Form.Item name='name' label='姓名' rules={[
                {
                    required: true,
                    message: '请输入你的姓名'
                }
            ]} >
                <Input />
            </Form.Item>
            <Form.Item name='sex' initialValue={0} label='性别' rules={[
                {
                    required: true
                }
            ]} >
                <Radio.Group  >
                    <Radio.Button value={0}>男</Radio.Button>
                    <Radio.Button value={1}>女</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item name='birth' label='出生年份' initialValue={2000} rules={[
                {
                    required: true,
                    message: '请选择你的出生年份'
                }
            ]} >
                <Select>
                    {createOptions()}
                </Select>
            </Form.Item>
            <Form.Item name='phone' label='手机号' rules={[
                {
                    required: true,
                    message: '请填写手机号',
                },{
                    pattern: /1\d{10}/g,
                    message: '请输入正确形式的11位手机号'
                }
            ]} >
                <Input />
            </Form.Item>
            <Form.Item name='email' label='邮箱' rules={[
                {
                    type: 'email',
                    message: '邮箱格式不正确',
                },
                {
                    required: true,
                    message: '请输入您的邮箱',
                },
            ]} >
                <Input />
            </Form.Item>
            <Form.Item name='address' label='地址' rules={[
                {
                    required: true,
                    message: '请填写你的地址'
                }
            ]}>
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type='primary' htmlType='submit' style={{ width: '20%', margin: '0 50%' }}>提交</Button>
            </Form.Item>
        </Form>
    )
}
