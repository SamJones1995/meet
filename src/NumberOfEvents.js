import React, { Component } from 'react';

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
						ref={this.myRef}
						className="numberOfEvents"
						onChange={this.handleInputChanged} 
						value={this.state.numberOfEvents}
						/>
						
        </div>
			);	
    }
};    

export default NumberOfEvents;