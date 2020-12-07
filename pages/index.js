import Head from "next/head";
import Layout from "@components/layout";
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
		<Layout>
			<Head>
				<title>Quotavio! Search for Quotes</title>
			</Head>
			<section>
				<h1 className="font-inter lg:text-7xl md:text-5xl text-4xl pb-4 tracking-tighter font-extrabold">
					Search for a Quote
				</h1>
				<SearchComponent data={typeahead} />
			</section>
		</Layout>
	);
}
