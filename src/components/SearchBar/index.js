import React, { useState } from 'react'
import { Input, Row, Col, Space,Radio } from 'antd'
const { Search } = Input;
export default function SearchBar(props) {
    // console.log(props);
    const [searchKey, setSearchKey] = useState(props.searchKey || '')
    const [sex, setSex] = useState(props.sex !== -1 ? props.sex : -1)
    const handleRadioChange = e => {
        // console.log(e.target.value);
        setSex(+e.target.value)
    }
    const handleSearchClick = () => {
        props.onSearch && props.onSearch({
            key: searchKey,
            sex
        })
    }
    return (
        <Row style={{marginBottom: '20px'}}>
            {/* 关键字：
            <input type="text" value={searchKey} onChange={e=>{
                setSearchKey(e.target.value)
            }} /> */}
            <Space size={20}>
                <Col>
                    <Search defaultValue={searchKey} placeholder="输入关键词" onSearch={value => {
                        // console.log('search:',value);
                        setSearchKey(value)
                        handleSearchClick()
                    }} enterButton />
                </Col>
                <Col>
                    性别：
                    <Radio.Group defaultValue={sex} buttonStyle="solid">
                        <Radio.Button onClick={handleRadioChange} value={-1}>不限</Radio.Button>
                        <Radio.Button onClick={handleRadioChange} value={0}>男</Radio.Button>
                        <Radio.Button onClick={handleRadioChange} value={1}>女</Radio.Button>
                    </Radio.Group>
                    
                </Col>
            </Space>
        </Row>
    )
}
