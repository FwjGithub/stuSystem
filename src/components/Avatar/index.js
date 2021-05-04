import React, {useState} from 'react'

import { Upload, Button } from 'antd'
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons'
export default function Avatar(props) {
    const [loading, setLoading] = useState(false)
    const [imgUrl, setImgUrl] = useState('')
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        const res = reader.readAsDataURL(img);
        // console.log(res);
    }
    const handleChange = info => {
        console.log(info);
        if (info.file.status === 'uploading') {
            setLoading(true)

            return;
        }
        if (info.file.status === 'done') {
            // console.log(info.file.response);
            // console.log(info.file.originFileObj);
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImgUrl(imageUrl)
                setLoading(false)
            });
        }
    };
    return (
        <div>
            <Upload
                accept={['.jpg', '.webp']}
                name="imagefile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="/api/upload"
                onChange={handleChange}
            >
                {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : <Button icon={loading ? <LoadingOutlined /> : <UploadOutlined />}>上传图片</Button>}
            </Upload>
        </div>
    )
}
