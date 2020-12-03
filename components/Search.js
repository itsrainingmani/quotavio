import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

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
		<div className="flex flex-col text-center items-center">
			<input
				type="text"
				className="box-content mx-10 mt-10 h-8 w-96 p-2 rounded-lg shadow-lg text-xl text-center italic text-gray-600 bg-purple-50"
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
			<div>
				<div className="box-content m-2 w-96 p-2 rounded-lg text-xl text-gray-600 bg-purple-50 text-justify">
					{resultList.map((r) => (
						<div className="box-content m-1 px-2 py-1 border flex justify-between">
							<span>{r.item.name}</span>
							<span>{r.item.count}</span>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
