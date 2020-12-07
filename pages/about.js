import Head from "next/head";
import Layout from "@components/layout";
import Title from "@components/title";

export default function AboutPage() {
	return (
		<Layout>
			<Head>
				<title>Quotavio! About Page</title>
			</Head>
			<section>
				<Title text="About Quotavio" />
			</section>
		</Layout>
	);
}
