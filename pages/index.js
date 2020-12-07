import Head from "next/head";
import Layout from "@components/layout";
import SearchComponent from "@components/Search";
import Title from "@components/title";
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
				<Title text="Search for a Quote" />
				<SearchComponent data={typeahead} />
			</section>
		</Layout>
	);
}
