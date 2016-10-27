import React, {Component} from 'react';
import { Col, Image } from 'react-bootstrap';

class ImageCell extends Component {
  render() {
    const { details } = this.props;
    return(
      <div>
        <Col xs={6} md={4}>
          <Image src={details.path} responsive/>
        </Col>
      </div>
    );
  }
}

export default ImageCell;
