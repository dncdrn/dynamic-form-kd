import React from 'react';
import {Input} from 'antd';

const { TextArea } = Input;

const TextAreaComponent = props =>{
return(
    <TextArea
      rows={4}
      value={props.answer}
      onChange={props.onChange}
      />
)
}
export default TextAreaComponent;