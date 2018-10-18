import React from 'react';

const ShowResult = props =>{
return(
    <div>
        <h1>Answers</h1>
        {
            props.formQuestions.map((value, index)=>{
                return(
                    <div className="p-1 text-center">
                        <h4>{value.prompt}</h4>
                        <h5>{Array.isArray(value.answer) ? value.answer.join(',') : value.answer}</h5>
                    </div>
                )
            })
        }
    </div>
)
}
export default ShowResult;