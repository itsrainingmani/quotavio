import Link from "next/link";

const links = [
	{ href: "https://github.com/itsrainingmani", label: "GitHub" },
	// { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-between p-8">
				<li>
					<Link href="/">
						<a className="text-blue-500 px-4 py-2 rounded shadow no-underline font-mono font-bold italic text-xl bg-gray-200 active:shadow-inner active:bg-gray-300">
							Quotavio
						</a>
					</Link>
				</li>
				<ul className="flex items-center justify-between space-x-4">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className="no-underline btn-blue">
								{label}
							</a>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	);
}
