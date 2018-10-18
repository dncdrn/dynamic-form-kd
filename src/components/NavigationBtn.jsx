import React from 'react';
import { Button } from 'antd';

const NavigationBtn = props =>{
return(
    <div className="steps-action nav-btn">
    {
      props.current > 0
      && (
        <Button size="large" onClick={props.prev}> Previous </Button>
      )
    }
    {
      props.current === props.questions.length - 1
      && <Button size="large" type="primary" className="float-right" onClick={props.showResult}>Done</Button>
    }
    {
      props.current < props.questions.length - 1
      && <Button size="large" type="primary" htmlType="submit" className="float-right" onClick={props.next}>Next</Button>
    }
  </div>
)
}
export default NavigationBtn;