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
				<div className="bg-white bg-opacity-90 w-10/12 md:w-11/12 lg:w-full p-2 mx-5 text-xl box-content flex flex-col text-justify shadow-md">
					<h2 className="font-inter lg:text-4xl md:text-3xl text-2xl tracking-tighter font-extrabold mt-4">
						The What
					</h2>
					<p className="font-inter text-xl p-2">
						Quotavio is a quote search tool that uses the{" "}
						<a href="https://favqs.com/api" className="underline text-blue-500">
							FavQ's API
						</a>{" "}
						to get results.
					</p>
					<h2 className="font-inter lg:text-4xl md:text-3xl text-2xl tracking-tighter font-extrabold mt-4">
						The How
					</h2>
					<p className="font-inter text-xl p-2">
						Quotavio is built with -
						<ul className="px-6 list-disc">
							<li>Next.js, A server-side React Framework</li>
							<li>TailwindCSS, A utility-first CSS framework</li>
							<li>
								The{" "}
								<a
									href="https://rsms.me/inter"
									className="underline text-blue-500"
								>
									Inter Typeface
								</a>{" "}
								by Rasmus Andersson
							</li>
						</ul>
					</p>
					<h2 className="font-inter lg:text-4xl md:text-3xl text-2xl tracking-tighter font-extrabold mt-4">
						The Who
					</h2>
					<p className="font-inter text-xl p-2">
						This site was built by{" "}
						<a className="underline text-blue-500">itsrainingmani</a>
					</p>
				</div>
			</section>
		</Layout>
	);
}
