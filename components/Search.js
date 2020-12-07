import React, { useState, useEffect } from "react";
import Fuse from "fuse.js/dist/fuse.basic";

export default function SearchComponent({ data }) {
	const tags = [
		"funny",
		"Mark Twain",
		"inspiring",
		"karmic",
		"Bill Burr",
		"speech",
	];
	const shuffle = (arr) =>
		arr
			.map((a) => [Math.random(), a])
			.sort((a, b) => a[0] - b[0])
			.map((a) => a[1]);

	const [placeholder, setPlaceholder] = useState([]);
	const [results, setResults] = useState([]);

	// Fuse config
	const options = { keys: ["name"], minMatchCharLength: 2, shouldSort: true };
	const fuseIndex = Fuse.createIndex(options.keys, data);
	const fuse = new Fuse(data, options, fuseIndex);

	useEffect(() => {
		setPlaceholder(shuffle(tags).slice(3));
	}, []);

	// Update the search results state when the value of the input box is changed
	const handleTextChange = async (e) => {
		const { value } = e.currentTarget;
		let searchvalues = fuse.search(value);
		setResults(searchvalues.slice(0, 6));
	};

	return (
		<div className="flex flex-col text-center items-center mx-auto">
			<input
				type="text"
				className="box-content h-10 w-10/12 md:w-11/12 lg:w-full p-2 mx-5 border border-gray-300 rounded-md shadow text-xl text-center bg-white font-inter"
				placeholder={placeholder.join(", ")}
				onChange={handleTextChange}
				maxLength={20}
			></input>
			<SearchResults data={results} />
		</div>
	);
}

function SearchResults({ data }) {
	const [resultList, setResultList] = useState([]);

	useEffect(() => {
		if (data !== null) {
			setResultList(data);
		}
	}, [data]);

	if (resultList.length > 0) {
		return (
			<div className="box-content w-10/12 md:w-11/12 lg:w-full p-2 rounded-lg text-xl text-gray-600 bg-blue-50 text-justify shadow-xl">
				{resultList.map((r) => (
					<div className="box-content m-1 px-2 py-1 border flex justify-between">
						<span>{r.item.name}</span>
						<span>{r.item.count}</span>
					</div>
				))}
			</div>
		);
	} else {
		return null;
	}
}
