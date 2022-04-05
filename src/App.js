import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import {Navbar, Container} from 'react-bootstrap';

class App extends Component {
    state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    activeLocation: 'all'
    }
  

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
    });
    this.updateEvents(currentLocation, eventCount);
  };

    
  //<NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} /> 

  render() {
    
    return (
      <div className="App">
        <Container>
          <Navbar expand="lg" className="mb-4" sticky="top">
            <Container>
              <Navbar.Brand >meet</Navbar.Brand>
            </Container>
            <Container className="justify-content-end">
              <CitySearch 
                locations={this.state.locations} 
                updateEvents={this.updateEvents}/>
            </Container>
          </Navbar>
        </Container>
        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}/>
        <Container>
          <Navbar sticky="bottom">
            <Container className="justify-content-center">
              <NumberOfEvents
                updateNumberOfEvents={this.updateNumberOfEvents}
                numberOfEvents={this.state.numberOfEvents}
              />
            </Container>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default App;
