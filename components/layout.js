import Head from "next/head";
import Nav from "@components/nav";
import Footer from "@components/footer";

const siteTitle = "Quotavio! Search for Quotes";

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Search for Quotes from authors with Quotavio"
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<Nav />
			<main className="text-center max-w-3xl mx-auto pt-20">{children}</main>
			<Footer />
		</div>
	);
}
