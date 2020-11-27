import Head from 'next/head';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import SearchBar from '@components/Search';

export default function IndexPage() {
	return (
		<div>
			<Head>
				<title>Quotavio! Search for Quotes</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main className='py-20 text-center'>
				<h1 className='shadow-txt'>Search for a fun quote</h1>
				<SearchBar />
			</main>
			<Footer />
		</div>
	);
}
