import React from 'react';



const TrendingListItem = ({trending}) =>(

	<div className="video-item">
		<img  alt={trending.snippet.title} src={trending.snippet.thumbnails.high.url}/>
		<p>ID Video: {trending.id}</p>
		<p className="video-title">{trending.snippet.title}</p>
		<span className="video-channel-name">{trending.snippet.channelTitle}</span>
		<span className="video-views">Views: {trending.statistics.viewCount}</span>
		<span className="video-post-date">{trending.snippet.publishedAt} days ago</span>
	</div>
)


const TrendingList = (props) => {
	return (
		<div className="video-wrapper">
			{console.log("From TrendingList")}
			{console.log(props)}
			{props.list.map(trending => (
				<TrendingListItem key={trending.id} trending={trending} />
				))}
		</div>
	)
}



export default TrendingList;


/*
const TrendingList = (props) => {
	return (
		<div className="video-wrapper">
			{props.list.map(trending => (
				<TrendingListItem trending={trending} />
				))}
		</div>
	)
}

*/