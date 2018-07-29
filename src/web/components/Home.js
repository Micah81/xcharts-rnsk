import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Chart from './Chart';
import VotingButtons from './ChartVoting'

const About = () => (
  <div>
    <Row>
      <Col xs="9">
          <Chart/>
      </Col>
      <Col xs="3">
          <VotingButtons/>
      </Col>
    </Row>
  </div>
);

export default About;
