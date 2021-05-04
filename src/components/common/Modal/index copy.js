import React from 'react'
import './index.css'
export default function Modal(props) {
    const defaultProps = {
        bg: "rgba(0,0,0,.5)"
    }
    const datas = Object.assign({}, defaultProps, props)
    return (
        <div className="modal" onClick={(e)=>{
            e.target.className === "modal" && datas.onClose()
        }} style={{
            backgroundColor: datas.bg
        }}>
            加载中。。。
            {/* <div className="modal-center">
                {datas.children}
                <div>
                    <button onClick={datas.onClose}>关闭蒙城</button>
                </div>
            </div> */}
        </div>
    )
}
