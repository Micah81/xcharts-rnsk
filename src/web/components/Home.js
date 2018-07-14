import React from 'react';
import { Row, Col, Jumbotron, Card } from 'reactstrap';
import Chart from './Chart';

const About = () => (
  <div>
    <Row>



      <Col xs="9">
          <Chart/>
      </Col>
      <Col xs="3">
        <p>Voting Buttons</p>

      </Col>



    </Row>
  </div>
);

export default About;
