import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import {Navbar, Container} from 'react-bootstrap';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.myRef = React.createRef();
	}
	
	state = {
				numberOfEvents: 32,
				infoText: ''
	}
	
	handleInputChanged = (event) => {
		const number = event.target.value
		if (number < 1 || number > 32) {
			this.setState({	
				numberOfEvents: "",
        infoText: "Enter number from 1 - 32",
			});	
		} else {
				this.setState({
					numberOfEvents: number,
					infoText: ""
				});
		}
    this.props.updateNumberOfEvents(event.target.value);
		//console.log(number);
  };

    render() {
      return (  
        <div className='NumberOfEvents'>
					<label className='numberOfEventsLabel'>Events:</label>
          <input
						type="number"
						className="numberOfEvents"
						onChange={this.handleInputChanged} 
						value={this.state.numberOfEvents}
					/>
					<ErrorAlert text={this.state.infoText} />
        </div>				
			);	
    }
};    

export default NumberOfEvents;