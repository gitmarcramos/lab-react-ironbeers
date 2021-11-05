import React from 'react';
import './AllBeers.css';
import Header from './../Header/Header';
import axios from 'axios';
import BeerCard from '../BeerCard/BeerCard';

export default class AllBeers extends React.Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const apiBeers = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({
        beers: apiBeers.data,
      });
    } catch (e) {
      console.log(e, 'Sorry dude, no beers yet');
    }

    
  }

  render() {
    return (
      <>
        <Header />
        <ul>
          {this.state.beers.map((beer, i)=>{
              return <li key={i}> <BeerCard data={beer}/> </li>
          })}
        </ul>
      </>
    );
  }
}
