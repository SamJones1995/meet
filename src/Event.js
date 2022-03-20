import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Event extends Component {

state = {
    collapsed: true
}

handleClick = () => {
    this.setState({
        collapsed: !this.state.collapsed
    });
};

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
    <Card className="event">
        <Card.Header className="summary">{event.summary}</Card.Header>
				<Card.Body className="event-body">
        <p className="start-date">
            {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className></p>
        <p className="location">
            {event.location}
        </p>
        <Button className={`${collapsed ? "show" : "hide"}-details`} 
        onClick={this.handleClick}>{collapsed ? "Show Details" : "Hide Details"}</Button>

        {!collapsed &&
        <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
        <h3>About the event:</h3>
        <a href={event.htmlLink} rel="noreferrer" target="_blank">
            See details on Google Calendar
            </a>
        <p className="event-description">{event.description}</p>
        </div>
        }
				</Card.Body>
    </Card>
    );
	}
}
export default Event;