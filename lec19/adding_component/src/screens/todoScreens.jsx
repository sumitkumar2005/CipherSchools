import React, { Component } from 'react'
import './todoScreens.css'
export default class todoScreens extends Component {
 state={
    taskCount : 0,
 }
  render() {
   
    return (
        <> 
        <h1 className='ui heading center'>TodoList</h1>
     
      <button onClick={(e)=>{
        this.setState({...this.state,taskCount : this.state.taskCount+1})
        console.log("i was clicked")


      }} className='btn ui warning button'>
        Add task
      </button>
      <p>Task Count is {this.state.taskCount}</p>
      </>
     
    )
  }
}
