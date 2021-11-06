import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import AllBeers from './components/AllBeers/AllBeers'
import BeerDetails from './components/BeerDetails/BeerDetails'

class App extends React.Component {
  state = {
    beers: null,
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:id" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
