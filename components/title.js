function QuoteRight() {
	return (
		<svg
			className="lg:w-8 md:w-7 w-6 lg:h-8 md:h-7 h-6"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="quote-right"
			class="svg-inline--fa fa-quote-right fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill="currentColor"
				d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
			></path>
		</svg>
	);
}

function QuoteLeft() {
	return (
		<svg
			className="lg:w-8 md:w-7 w-6 lg:h-8 md:h-7 h-6"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="quote-left"
			class="svg-inline--fa fa-quote-left fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill="currentColor"
				d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
			></path>
		</svg>
	);
}

export default function Title({ text }) {
	return (
		<div className="flex flex-row justify-center">
			<QuoteLeft />
			<h1 className="font-inter lg:text-7xl md:text-5xl text-4xl pb-4 px-2 tracking-tighter font-extrabold">
				{text}
			</h1>
			<QuoteRight />
		</div>
	);
}
