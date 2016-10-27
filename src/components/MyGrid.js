import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';
import ImageCell from './ImageCell'

class MyGrid extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <ImageCell />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MyGrid;
