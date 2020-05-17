import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {

    return (

      <div className='allButtons'>

        <button className='changeButton' onClick={this.props.previous}>{`< Previous`}</button>

        <button className='noClick'>Edit</button>

        <button className='noClick' onClick={this.props.delete}>Delete</button>

        <button className='noClick'>New</button>

        <button className='changeButton' onClick={this.props.next}>Next > </button>

      </div>

    )

  }

}