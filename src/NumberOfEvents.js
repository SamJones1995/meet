import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
				numberOfEvents: '1',
	}
		

	handleInputChange = (event) => {
		const eventCount = event.target.value;
		this.props.updateEvents(null, eventCount);
		this.setState({
			numberOfEvents: event.target.value,
		});
}

    render() {
			const { numberOfEvents } = this.state;
      return (  
        <div className='NumberOfEvents'>
            <input
						type="number"
						onChange={this.handleInputChange} 
						value={numberOfEvents}
						className="numberOfEvents"/>
        </div>
			)	
    }
};    

export default NumberOfEvents;