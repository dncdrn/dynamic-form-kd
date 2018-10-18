import React from 'react';
import {Radio} from 'antd'
import '../css/checkbox.css';


const RadioGroup = Radio.Group;

const RadioButtonComponent = props =>{
// const value = props.radioValue.length > 0 ? props.radioValue : []
return(
    <RadioGroup className="option-grp" onChange={props.radioOnChange}
    value={props.radioValue}>
    {
        props.options.map((v, i)=>{
            return(
                <Radio key={i} value={i}>{v}</Radio>
            )
        })
    }
    </RadioGroup>
)
}
export default RadioButtonComponent;