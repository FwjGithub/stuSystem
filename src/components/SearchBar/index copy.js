import React, {useState} from 'react'

export default function SearchBar(props) {
    console.log(props);
    const [searchKey, setSearchKey] = useState(props.searchKey || '')
    const [sex, setSex] = useState(props.sex !== -1 ? props.sex : -1)
    const handleRadioChange = e => {
        console.log(e.target.value);
        setSex(+e.target.value)
    }
    const handleSearchClick = () =>{
        props.onSearch && props.onSearch({
            key: searchKey,
            sex
        })
    }
    return (
        <div>
            关键字：
            <input type="text" value={searchKey} onChange={e=>{
                setSearchKey(e.target.value)
            }} />
            性别：
            <label><input checked={sex === -1} type="radio" name="sex" value={-1} onChange={handleRadioChange} />不限</label>
            <label><input checked={sex === 0} type="radio" name="sex" value={0} onChange={handleRadioChange} />男</label>
            <label><input checked={sex === 1} type="radio" name="sex" value={1} onChange={handleRadioChange} />女</label>
            <button style={{marginLeft: '20px'}} onClick={handleSearchClick}>查询</button>
        </div>
    )
}
