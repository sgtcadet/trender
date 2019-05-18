import React, {Component} from 'react';
import Intro from '../../components/Intro';
import TrendingList from '../../components/TrendingList';
import './index.css';


class TopTrending extends Component{
	constructor(props){

		super(props);

		this.state = {
			trending: [],
			apiKey: 'AIzaSyBoy6lO6zjfvQda-prpF4kjQOe2M6rB0oE',
			regionCode: this.props.region
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		alert(event.target.value);
		let value = document.getElementById('rcode').value;
		console.log("Val:" + value);
		// BUG
		this.setState((prevState, value) =>({
			regionCode: value
		}));
		// /BUG 
		console.log("New State:" + this.state.regionCode)
		fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=${value}&key=${this.state.apiKey}`)
		.then(res => res.json())
		.then(json => this.setState({trending:json.items}))
	}
	//url : base - https://www.googleapis.com/youtube/v3
	// append url /videos
	// GET https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=JM&key={YOUR_API_KEY}
	componentDidMount(){
		fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=${this.state.regionCode}&key=${this.state.apiKey}`)
		.then(res => res.json())
		//.then(json => console.log(json))
		.then(json => this.setState({trending:json.items}))
		//{ console.log("From TopTrending") }
		//{ console.log(this.state.trending) }
		//.then(json => {this.setState({trending:json}),console.log(json)})
	}
	render(){
		const {trending, apiKey} = this.state;
		return(
			<div className="top-trending">
				<Intro message="View the most Top Trending youtube videos right now!" />
				<p>Region code: <input contentEditable={true} id="rcode" suppressContentEditableWarning={true} onBlur={this.handleChange} placeholder={this.state.regionCode} style={{backgroundColor:"#52565b",color:"#fff",padding:"5px 10px"}}/></p>
				<TrendingList list={this.state.trending} />
			</div>
		)
	}
}

TopTrending.defaultProps = {
	region: 'US'
}

export default TopTrending;