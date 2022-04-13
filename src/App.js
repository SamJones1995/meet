import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from "./EventGenre";
import {Container, Row, Col} from 'react-bootstrap';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

class App extends Component {
    state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: false
    }

    async componentDidMount() {
      this.mounted = true;
      const accessToken = localStorage.getItem("access_token");
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
  
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) });
        }
      });
      }
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };
    
  render() {
    if (this.state.showWelcomeScreen === undefined) 
    return <div className="App" />;
      
    return (
      <div className="App">
        <Container>
          <Row>
            <Col className='justify-content-left'>
              <h4 className="brand" >meet</ h4>
            </Col>
            <Col className="justify-content-end">
              <CitySearch 
                locations={this.state.locations} 
                updateEvents={this.updateEvents}/>
            </Col>
            <Col md={5}>
            <NumberOfEvents
                updateNumberOfEvents={this.updateNumberOfEvents}
                numberOfEvents={this.state.numberOfEvents}
              />
            </Col>
          </Row>  
        </Container>
        <Container className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400}>
            <ScatterChart 
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis 
                type="number" 
                dataKey="number" 
                name="number of events" 
                allowDecimals={false}/>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#2b6777" />
            </ScatterChart>
          </ResponsiveContainer>
        </Container>
        <EventList className="float-right"
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}/>
        {
          navigator.onLine &&    
        <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }} /> 
          }      
      </div>
    );
  }
}

export default App;
