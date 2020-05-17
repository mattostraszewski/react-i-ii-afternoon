import React, { Component } from 'react';
import data from './data';
import Buttons from './components/Buttons';
import './App.css';
import People from './components/People';



export default class App extends Component {

  constructor() {
    super();

    this.state = {
      peopleData: data,
      pageCount: 1
    }
  }

  previousPage = () => {
    let pageCount = this.state.pageCount
    if (pageCount === 1) {
      let lastPerson = this.state.peopleData.length
      this.setState({
        pageCount: lastPerson
      })
    }
    else {
      this.setState({
        pageCount: pageCount - 1
      })
    }
  }

  nextPage = () => {
    let pageCount = this.state.pageCount
    const lastPerson = this.state.peopleData.length
    if (pageCount === lastPerson) {
      this.setState({
        pageCount: 1
      })
    } else {
      this.setState({
        pageCount: pageCount + 1
      })
    }
  }

  delete = () => {
    const { peopleData, pageCount } = this.state
    const indexToDelete = pageCount - 1
    if (indexToDelete > -1) {
      const newPeople = peopleData.filter((element, index) => {
        return index !== indexToDelete
      })
      this.setState({ peopleData: newPeople })
    }
  }

  render() {
    const { peopleData, pageCount } = this.state
    const currentPerson = peopleData[pageCount - 1] //Putting pageCount - 1 in [] is representing index of peopleData


    return (

      <div className='App' >

        <div className='header'>
          <h2 className='home'>Home</h2>
        </div>

        <div className='body'>
          <div className='card'>
            <People person={currentPerson} count={peopleData.length} index={pageCount} />
          </div>

          <Buttons previous={this.previousPage} next={this.nextPage} delete={this.delete} />

        </div>

      </div>

    )
  }
}
