import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {

    return (

      <div className='allButtons'>

        <button className='changeButtonPrev' onClick={this.props.previous}>{`< Previous`}</button>

        <div className='derp'>

          <button className='noClick'>Edit</button>

          <button className='noClick' onClick={this.props.delete}>Delete</button>

          <button className='noClick'>New</button>

        </div>

        <button className='changeButtonNext' onClick={this.props.next}>Next > </button>

      </div>

    )

  }

}