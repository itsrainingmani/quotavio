import React, { useState, useEffect } from 'react';

export default function SearchBar() {
	const tags = [
		'funny',
		'Mark Twain',
		'inspiring',
		'karmic',
		'Bill Burr',
		'speech',
	];
	const shuffle = (arr) =>
		arr
			.map((a) => [Math.random(), a])
			.sort((a, b) => a[0] - b[0])
			.map((a) => a[1]);
	const [placeholder, setPlaceholder] = useState([]);

	useEffect(() => {
		setPlaceholder(shuffle(tags).slice(3));
	}, []);

	return (
		<input
			type='text'
			className='box-content m-10 h-8 w-96 p-2 rounded-lg shadow-lg text-xl text-center italic text-gray-600 bg-purple-100'
			placeholder={placeholder.join(', ')}
		></input>
	);
}
