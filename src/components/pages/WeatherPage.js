import React from 'react';
import Card from '../nav/Card.js';
import '../../src/scss/Weather.Page.scss';

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

class WeekContainer extends React.Component {
	state = {
		days: []
	}

	componentDidMount = () => {
		fetch(weatherURL)
			.then(res => res.json())
			.then(data => {
				const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
				this.setState({days: dailyData})
			})
	}

	 formatCards = () => {
		return this.state.days.map((day, index) => <Card day={day} key={index}/>)
	}
		render(){
		return (
			<div className="content-grid ">
				<h1 className="weather-title">Weather forecast</h1>
				<h5 className="weather-city">Kyiv</h5>
				<div className="weather-items items-cards">

					{this.formatCards()}

				</div>
			</div>
		)
	}
}

export default WeekContainer;