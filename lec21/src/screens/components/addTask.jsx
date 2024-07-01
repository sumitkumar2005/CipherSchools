import React from 'react'
import { useState } from 'react'
function addTask({onSubmit}) {
 
    const [task, settask] = useState({
      title:"",
      description:""
    })
    let handleInput = (e)=>{
        settask({
          ...task,[e.target.name] : e.target.value,

        })

    }
  
    let onFormSubmit =(e)=>{
      e.preventDefault()
      onSubmit(task);
      console.log(task)
    }
  return (
   <>
   <h3 className='ui heading center'>Input your todo list info</h3>
  <form className="ui form" onSubmit={onFormSubmit}>                      
  <div className="field">
    <label>title</label>
    <input type="text" name="title" placeholder="Title" onChange={handleInput} value={task.title}></input>
  </div>
  <div className="field">
    <label>Description</label>
    <input type="text" name="description" placeholder="Description  " onChange={handleInput} value={task.description}></input>
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"></input>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button  type='submit' className="ui primary button">
  Submit
</button>

</form>
   </>
  )
}

export default addTask
