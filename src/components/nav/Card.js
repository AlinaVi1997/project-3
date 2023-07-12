import React from 'react';
import '../../src/scss/card.scss';

class Card extends React.Component {
	// Props: day, key(index)

	render() {
		const ms = this.props.day.dt * 1000;
		const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});

		const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

		// const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32


		return (
			<div className="card-item">
				<div className="card-bg">
					<i className={imgURL}></i>
					<h2 className='card-degrees'>{Math.round(this.props.day.main.temp)} °C</h2>
						<div className="card-descr">{this.props.day.weather[0].description}</div>
						<h3 className="card-day">{weekdayName}</h3>
				</div>
			</div>
		)
	}
}

export default Card