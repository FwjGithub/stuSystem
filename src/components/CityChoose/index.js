import React, {useState, useEffect} from 'react'
import {Cascader} from 'antd'
import {getRegion} from '../../service'
export default function CityChoose() {
    const [options, setOptions] = useState([]);
    const onChange = ()=>{
        console.log('change');
        // getRegion().then(resp => {
        //     console.log(resp);
        // })
    }
    useEffect(() => {
        console.log('rrr');
        getRegion().then(resp => {
            console.log('resp,resp', resp);
        })
    }, [])
    return (
        <Cascader options={options} onChange={onChange} placeholder="请选择地区">
            
        </Cascader>
    )
}
