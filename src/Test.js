import React, {useEffect, useState} from 'react'
import { json } from 'react-router-dom'

function Test() {
    const [ques, setQues] = useState([{
        passage: "",
        questionTitle:"",
        questionText: "",
        option: ""
 
    }]) 

    useEffect(() => {
        fetch("/test").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setQues(jsonRes));
    })
  return (
    <div>
      {ques.map (que => <div className="mt-5 border ">
                
                 <h1 className='text mt-5 mb-2'>{que.passage}</h1> 
                    
                <h1 className=' font-bold mb-2'>{que.questionTitle}</h1>
                <h1 className='text-lg mb-2'>{que.questionText}</h1>
                <h1 className=''>{que.option}</h1>
                

              </div>
              
              
              
              )}
    </div>
  )
}

export default Test
