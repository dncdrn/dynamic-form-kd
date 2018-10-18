import React from 'react';
import { Icon, Modal,Upload } from 'antd';
import '../css/upload.css'
const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
)

const UploadPictureComponent = props =>{
    console.log(props)
return(
    <div className='clearfix'>
     <Upload
          className="upload"
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={props.fileList}
          onPreview={props.handlePreview}
          onChange={props.handleChange}
        >
         {props.fileListLength >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={props.previewVisible} footer={null} onCancel={props.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={props.previewImage} />
        </Modal>
    </div>
)
}
export default UploadPictureComponent;