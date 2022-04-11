import React, { Component } from 'react';
import './CitySearch.css';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: [],
		showSuggestions: undefined
	}

	hanldeInputChanged = (event) => {
		const value = event.target.value;
		this.setState({showSuggestions:true});
		const suggestions = this.props.locations.filter((location) => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1
		});
		if (suggestions.length === 0) {
			this.setState({
				query: value,
				infoText: 'Invalid entry please try another city',
			});
		} else {
			return this.setState({ 
				query: value,
				suggestions,
				infoText: ''
			});
		}
	};

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			showSuggestions: false,
			infoText: ''
		});
		this.props.updateEvents(suggestion);
	}

  render() {
    return (
      <div className='CitySearch' style={{display:  this.state.showWelcomeScreen === false || undefined? 'block' : 'none'} }>
				<InfoAlert text={this.state.infoText} />
        <input
					type="text"
					className="city"
					value={this.state.query}
					placeholder="Search by City"
					onChange={this.hanldeInputChanged}
					onFocus={() => { this.setState({ showSuggestions: true }) }}
				/>
				<ul className='suggestions' style={this.state.showSuggestions ? {}: { display: 'none'}}>
					{this.state.suggestions.map((suggestion) => (
						<li 
						key={suggestion}
						onClick={() => this.handleItemClicked(suggestion)}
						>{suggestion}</li>
					))}
					<li onClick={() => this.handleItemClicked('all')}>
						<b>See all cities</b>
					</li>
				</ul>	
      </div>
    );
  }
}

export default CitySearch;