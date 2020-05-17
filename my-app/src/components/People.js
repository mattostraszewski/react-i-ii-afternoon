import React, { Component } from 'react';

export default class People extends Component {

  render() {
    const { person, count, index } = this.props;

    return (

      <div className='card'>

        <div className='peeps'>
          <h1>{person.name.first} {person.name.last}</h1>
          <h4>From: {person.city}, {person.country}</h4>
          <h4>Job Title: {person.title}</h4>
          <h4>Employer: {person.employer}</h4>

          <h4>Favorite Movies:
          <ul>
              <li>{person.favoriteMovies[0]}</li>
              <li>{person.favoriteMovies[1]}</li>
              <li>{person.favoriteMovies[2]}</li>
            </ul>
          </h4>
        </div>

        <div className='counter'>
          <h1>{index}/{count}</h1>
        </div>

      </div>

    )

  }



}