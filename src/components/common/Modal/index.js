import React from 'react'
import './index.css'
import {Spin} from 'antd'
export default function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
        <div className="modal">
            <p>加载中..</p>
        </div>
    )
}
