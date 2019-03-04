import React, { useState } from 'react';

export function Hooks() {
	const [ data, setData] = useState({});
	return(
		<div className="hooks">

		</div>
		)
}


 export function UserInput() {
	const [ value, setValue ] = useState('');
	function handleChange(e) {
		value = e.target.value;
		setValue(value)
	}
	return(
		<form>
				<input type='text' onChange={handleChange} />
		</form>
	)
}