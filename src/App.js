import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import MyNav from './components/MyNav';
import ImageCell from './components/ImageCell';

import allImages from './model/images';

console.log('make all categories work');

const colorOnly = Object.keys(allImages)
  .map( (key) => {
      if (allImages[key].category === 'color') {
        return allImages[key]
      } else {
        return 'category color not found'
      }
    }
  )
console.log(colorOnly);

class App extends Component {
  constructor() {
    super();
    this.loadColorsOnly = this.loadColorsOnly.bind(this);
    this.state = {
      images: allImages
    }
  } // end constructor

  loadColorsOnly() {
    this.setState({
      images: colorOnly
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
              .map( (key) => <ImageCell key={key} details={this.state.images[key]} />)
            }
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
