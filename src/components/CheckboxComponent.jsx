import React from 'react';
import {Checkbox} from 'antd';
import '../css/checkbox.css';

const CheckboxGroup = Checkbox.Group;

const CheckboxComponent = props =>{
const value = props.checkedValues.length > 0 ? props.checkedValues : []
return(
    <CheckboxGroup className="option-grp" options={props.options}
     onChange={props.checboxOnChange}
     value={value}/>
)
}
export default CheckboxComponent;