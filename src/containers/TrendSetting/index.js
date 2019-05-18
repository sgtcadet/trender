import React, {Component}  from 'react';
import TopTrending from '../TopTrending';




const TrendHold = (props) => {
	return (
		<TopTrending setting={props.value}/>
	);
};

/* TODO: get user input, pass user input back to the Trending list */
class TrendSetting extends Component{
	constructor(props){
		super(props);

		this.state = {
			value : ''
		}
		//binding handle click
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}// constructor end

	handleChange(event){
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event){
		// Preventing default form submission behaviour
		event.preventDefault();
		console.log("Input value: " + this.state.value);
		// redirect to TopTrending with region code props
	}


	render(){
		return(

			<div>
				<form onSubmit={this.handleSubmit}>
				<label>COUNTRY CODE</label>
				<div>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				</div>

				<div>
				{/*<button className="btn" onClick="">Save Setting</button>*/}
				<input type="submit" className="btn" value="Submit" />
				</div>

				<div>
				<button className="btn" onClick="">Cancel</button>
				</div>
				</form>
			</div>
		)
	}
}

export default TrendSetting;