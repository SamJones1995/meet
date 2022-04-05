import React, { Component } from 'react';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.myRef = React.createRef();
	}
	
	state = {
				numberOfEvents: 32,
	}
	
		

	handleInputChanged = (event) => {
		const number = event.target.value
      this.setState({
        numberOfEvents: number,
      });
			
    this.props.updateNumberOfEvents(event.target.value);
		//console.log(number);
  };

    render() {
      return (  
        <div className='NumberOfEvents'>
            <input
						type="number"
						placeholder='Number of Events'
						className="numberOfEvents"
						onChange={this.handleInputChanged} 
						value={this.state.numberOfEvents}
						/>
						
        </div>
			);	
    }
};    

export default NumberOfEvents;