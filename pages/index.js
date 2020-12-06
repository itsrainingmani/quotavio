import Head from "next/head";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import SearchComponent from "@components/Search";
import React, { useState, useEffect } from "react";

export default function IndexPage() {
	const [typeahead, setTypeahead] = useState([]);

	useEffect(() => {
		(async function loadData() {
			let response = await fetch("/typeahead.json");

			if (response.ok) {
				console.log("Data is good");
				let data = await response.json();
				let authorsAndTags = data.authors.concat(data.tags);
				setTypeahead(authorsAndTags);
			}
		})();
	}, []);

	return (
		<div>
			<Head>
				<title>Quotavio! Search for Quotes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main className="text-center max-w-3xl mx-auto pt-20">
				<h1 className="font-inter text-5xl pb-4 uppercase tracking-tighter font-bold">
					Search for a fun quote
				</h1>
				<SearchComponent data={typeahead} />
			</main>
			<Footer />
		</div>
	);
}
