import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';


export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Learn to code from my YouTube videos</p>
      </Container>
    </Jumbo>
  </Styles>
)