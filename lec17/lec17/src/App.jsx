import React, { Component } from 'react'

export default class App extends Component {
  name="Sumit kumar jha"
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <p>Hello {this.name}</p>
      </div>
    )
  }
}

