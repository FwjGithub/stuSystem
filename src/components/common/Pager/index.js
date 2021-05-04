import React from 'react'
import style from './Page.css'
export default function Pager(props) {

    /**
     * 传入的参数包括
     * current： 当前页码
     * total：总数据量
     * limit： 每一页展示的数据量
     * panalNumber：总共显示几个页码 
     * onPageChange: 切换页码时候的事件
     */
    // console.log("pager",props.limit);
    const current = props.current;
    const total = props.total;
    const limit = props.limit;
    const panalNumber = props.panalNumber;
    const totalPages = getTotalPages(props);
    const pageList = [];
    for (let i = 0; i < panalNumber; i++) {
        const pageText = current - Math.floor(panalNumber / 2) + i;//最小页码 + i,就得出当前页码
        if(pageText < 1 || pageText > totalPages){
            continue;
        }
        const page = <span onClick={()=>{toPage(pageText,props)}}  key={i} className={current === pageText ? `${style.item} ${style.disabled}`: `${style.item}`}>{pageText}</span>
        pageList.push(page);
    }
    return (
        <div className={style.pager}>
            <span onClick={()=>{toPage(1,props)}} className={current === 1 ? `${style.item} ${style.disabled}`:`${style.item}`}>首页</span>  
            <span onClick={()=>{toPage(current - 1,props)}} className={current === 1 ? `${style.item} ${style.disabled}`:`${style.item}`}>上一页</span>  
            
            {/* 这里就显示n个页码 */}
            {pageList}
            <span onClick={()=>{toPage(current + 1 ,props)}} className={current === totalPages ? `${style.item} ${style.disabled}`:`${style.item}`}>下一页</span>  
            <span onClick={()=>{toPage(totalPages,props)}} className={current === totalPages ? `${style.item} ${style.disabled}`:`${style.item}`}>尾页</span>  
            <span className="currentPage">{current}</span>
            /
            <span>{totalPages}</span>
        </div>
    )
    function getTotalPages(){
        return Math.ceil(total / limit);
    }
    function toPage(target){
        // console.log("触发事件之前的target：",target);
        if(current === target){
            return;
        }
        if(target < 1 || target > totalPages){
            return;
        }
        props.onPageChange && props.onPageChange(target);
    }
}
