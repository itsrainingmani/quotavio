import Link from "next/link";

const extLinks = [
	{ href: "https://github.com/itsrainingmani/quotavio", label: "GitHub" },
	// { href: 'https://nextjs.org/docs', label: 'Docs' },
];

const internalLinks = [
	{ href: "/", label: "Quotavio" },
	{ href: "/about", label: "About" },
];

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-between p-8">
				<ul className="flex items-center justify-between space-x-2">
					{internalLinks.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<Link href={href}>
								<a className="text-blue-500 p-2 rounded hover:shadow no-underline font-inter font-bold italic text-xl hover:bg-gray-200 active:shadow-inner active:bg-gray-300">
									{label}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<ul className="flex items-center justify-between space-x-4">
					{extLinks.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className="no-underline btn-blue font-inter">
								{label}
							</a>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	);
}
