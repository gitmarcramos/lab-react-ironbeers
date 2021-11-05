import React from 'react';
import Header from '../Header/Header';
import './BeerDetails.css';
import axios from 'axios';

export default class BeerDetails extends React.Component {

    state={
        beer: null
    }

  async componentDidMount() {
    console.log(this.props.match.params)
    try {
        const detailedBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params);
        this.setState({beer: detailedBeer})

    } catch (e) {
      console.log(e, 'No details dude');
    }
  }


  render() {
    return (
      <>
        <Header />
        <h1>{this.props.match.params}</h1>
      </>
    );
  }
}
