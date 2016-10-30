import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import MyNav from './components/MyNav';
import ImageCell from './components/ImageCell';

// IMPORT DATA AND FILTERS FROM MODEL
import allImages from './model/images';
import colorOnly from './model/ColorOnlyFilter';
import fontOnly from './model/FontOnlyFilter';
import animationOnly from './model/AnimationsOnlyFilter';

class App extends Component {
  constructor() {
    super();
    this.loadColorsOnly = this.loadColorsOnly.bind(this);
    this.loadFontsOnly = this.loadFontsOnly.bind(this);
    this.loadAnimationsOnly = this.loadAnimationsOnly.bind(this);
    this.state = {
      images: allImages
    }
  } // end constructor

  loadColorsOnly() {
    this.setState({
      images: colorOnly
    });
  }

  loadFontsOnly() {
    this.setState({
      images: fontOnly
    });
  }

  loadAnimationsOnly() {
    this.setState({
      images: animationOnly
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MyNav
            loadColorsOnly={this.loadColorsOnly}
            loadFontsOnly={this.loadFontsOnly}
            loadAnimationsOnly={this.loadAnimationsOnly}
          />
          <Grid>
            <Row>
            {
              Object.keys(this.state.images)
              .map( (key) =>
                <ImageCell id='imageCell' key={key} details={this.state.images[key]} />)
            }
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
