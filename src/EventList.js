import React, { Component } from 'react';
import Event from './Event';
import { Container, Col, Row } from "react-bootstrap";

class EventList extends Component {
  render() {
		const { events } = this.props;
    return (
      <Container className="EventList">
        <Row>
          {events.map((event) => (            
            <Col xs={12} md={6} key={event.id}>
              <Event event={event} />
            </Col>          
          ))}
         </Row>    
      </Container>
    );
  }
}

export default EventList;