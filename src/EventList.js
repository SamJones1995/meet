import React, { Component } from 'react';
import Event from './Event';
import { OfflineAlert } from "./Alert";
import { Container, Col, Row } from "react-bootstrap";

class EventList extends Component {
  render() {
		const { events } = this.props;
    return (
      <Container className="EventList">
        {!navigator.onLine ? (
          <OfflineAlert text="You are offline! The displayed event list has been loaded from the cache." />
        ) : (
          <OfflineAlert text="" />
        )}
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