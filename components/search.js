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
	const [searchTerms, setSearchTerms] = useState([]);

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

	const addResult = async (result) => {
		if (searchTerms.includes(result)) {
			console.log("Term is already in Search Terms");
			return;
		}
		console.log(`Added ${result} to Search Terms`);
		setSearchTerms([...searchTerms, result]);
		console.log(searchTerms);
	};

	const removeResult = async (result) => {
		if (searchTerms.includes(result)) {
			setSearchTerms(searchTerms.filter((i) => i !== result));
		}
	};

	return (
		<div className="flex flex-col text-center items-center mx-auto">
			<label htmlFor="search-terms" className="hidden">
				search for a quote
			</label>
			<div className="flex flex-row flex-wrap w-10/12 md:w-11/12 lg:w-full">
				{searchTerms.length === 0
					? null
					: searchTerms.map((s) => (
							<div className="font-inter flex flex-row justify-between rounded-md text-lg border-2 border-blue-500 bg-white bg-opacity-90 mr-1 mb-1">
								<text className="text-center p-1 border-r-2 border-blue-400">
									{s}
								</text>
								<button
									className="p-1 hover:bg-red-500 active:shadow-inner active:bg-red-600"
									onClick={() => {
										removeResult(s);
									}}
								>
									✖
								</button>
							</div>
					  ))}
			</div>
			<input
				id="search-terms"
				type="text"
				className="box-content h-10 w-10/12 md:w-11/12 lg:w-full py-2 mx-5 border border-gray-300 rounded-md shadow text-xl text-center bg-white font-inter mt-2"
				placeholder={placeholder.join(", ")}
				onChange={handleTextChange}
			></input>
			<SearchTermResults data={results} resultHandler={addResult} />
		</div>
	);
}

function SearchTermResults({ data, resultHandler }) {
	const [resultList, setResultList] = useState([]);

	useEffect(() => {
		if (data !== null) {
			setResultList(data);
		}
	}, [data]);

	if (resultList.length > 0) {
		return (
			<div className="box-content w-10/12 md:w-11/12 lg:w-full rounded-lg text-xl text-gray-800 bg-gray-50 text-justify shadow-xl">
				<div className="box-border flex justify-between px-4 border border-b-2 text-sm text-gray-500 italic">
					<span className="font-inter">result</span>
					<span className="font-inter">count</span>
				</div>
				{resultList.map((r, i) => (
					<div
						key={`${r.item.name}${r.item.count}`}
						className="box-border p-4 flex justify-between hover:bg-gray-200 active:bg-green-100 active:shadow-inner"
						onClick={() => resultHandler(r.item.name)}
					>
						<span className="font-inter">{r.item.name}</span>
						<span className="font-inter">{r.item.count}</span>
					</div>
				))}
			</div>
		);
	} else {
		return null;
	}
}
