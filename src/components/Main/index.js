import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopTrending from '../../containers/TopTrending';
import TrendSetting from '../../containers/TrendSetting';


const Main = props => (
	<Switch>
		<Route exact path="/" component={TopTrending} />
		<Route path="/settings" component={TrendSetting} />
	</Switch>
)

export default Main;