import React from 'react';

function CreateEvent(obj){
	const events = obj.events;
	const setEvents = obj.setEvents;
	
	const updateEvents = (() => {
		const clear = (elementList) => {
			elementList.forEach(element => {
				element.value = '';
			});
		}; 
		const date = document.querySelector('#date');
		const title = document.querySelector('#title');
		const content = document.querySelector('textarea');
		const dateVal = date.value;
		const titleVal = title.value;
		const contVal = content.value;
		setEvents([...events, { dateVal, titleVal, contVal }])
		clear([date, title, content]);
	});
	
	return (
		<form className = 'box' onSubmit = { (event) => { event.preventDefault(); updateEvents() } }>
			<input id = 'date' type = 'date' className = 'input' required/>
			<input id = 'title' type = 'text' className = 'input' placeholder = 'Type Event Title...' required/>
			<textarea rows ={8} cols ={35} className = 'input' placeholder = 'Type Event Content...' required/>
			<input type = 'submit' className = 'input' value = 'Submit' />
		</form>
	);
}

export default CreateEvent;