import React, { useState } from 'react';
import moment from 'moment';
import EventList from './EventList.js';
import CreateEvent from './CreateEvent.js';
import './App.css';

function App(){
	const [events, setEvents] = useState([]);
	const num = events.length > 1 ? events.length + ' Events!' : events.length === 1 ? '1 Event!' : 'No Events!';
	const date = new Date();
	return (
		<div className = 'container'>
			<h2>Acme Event Site ({ num })</h2>
			<h4>Welcome! Today is { moment(date).format('ddd D MMM YYYY') }</h4>
			<div className="App">
				<CreateEvent setEvents = { setEvents } events = { events }/>
				<EventList events = { events }/>
			</div>
		</div>
	);
}

export default App;
