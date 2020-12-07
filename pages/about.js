import Head from "next/head";
import Layout from "@components/layout";

export default function AboutPage() {
	return (
		<Layout>
			<Head>
				<title>Quotavio! About Page</title>
			</Head>
			<section>
				<h1 className="font-inter lg:text-7xl md:text-5xl text-4xl pb-4 tracking-tighter font-extrabold">
					About Quotavio
				</h1>
			</section>
		</Layout>
	);
}
