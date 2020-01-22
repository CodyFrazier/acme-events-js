import React from 'react';
import moment from 'moment';

function EventList(events){
	return (
		<ul className = 'box'>{
			events.events.map((event, idx) => {
				return (
					<li key = { idx }>
						<h1>{ event.titleVal }</h1>
						<p>{ moment(event.dateVal).format('dddd D MMM YYYY') }</p>
						<input type = 'button' value = 'x'/>
						<p>{event.contVal}</p>
					</li>
				)
			}) 
		}</ul>
	);
}

export default EventList;