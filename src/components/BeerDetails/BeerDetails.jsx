import React from 'react';
import Header from '../Header/Header';
import './BeerDetails.css';
import axios from 'axios';

export default class BeerDetails extends React.Component {
  state = {
    beer: [],
  };

  async componentDidMount() {
    try {
      const detailedBeer = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/' +
          this.props.match.params.id
      );
      this.setState({ beer: detailedBeer.data });
      console.log(this.state.beer);
    } catch (e) {
      console.log(e, 'No details dude');
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="beer_details-container">
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          <div className="beer_details-specs-container">
            <div className="beer_details-specs-container-line1">
              <h1>{this.state.beer.name}</h1>
              <h2>{this.state.beer.attenuation_level}</h2>
            </div>
            <div className="beer_details-specs-container-line2">
              <h3>{this.state.beer.tagline}</h3>
              <h4>{this.state.beer.first_brewed}</h4>
            </div>
          </div>
          <p className="description">{this.state.beer.description}</p>
          <span className="contributor">{this.state.beer.contributed_by}</span>
        </div>
      </>
    );
  }
}
