import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import MyNav from './components/MyNav';
import ImageCell from './components/ImageCell';

import allImages from './model/images';

class App extends Component {
  constructor() {
    super();
    // bind your methods
    this.loadColorsOnly = this.loadColorsOnly.bind(this);
    // define initial state
    this.state = {
      images: allImages
    }
  } // end constructor

  loadColorsOnly() {
    this.setState({
      images: allImages
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MyNav loadColorsOnly={this.loadColorsOnly} />
          <Grid>
            <Row>
            {
              Object.keys(this.state.images)
              .map( key => <ImageCell key={key} details={this.state.images[key]} />)
            }
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
