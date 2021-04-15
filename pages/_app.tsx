import { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Link href={`/`}>
				<a>
					<h1 className={'container mx-auto mb-10 text-center text-7xl'}>
						Welcome to &nbsp;
						<a className="text-red-400 font-mono" href="https://github.com/minhoyooDEV">
							MYNO<span className="text-red-600">UB</span>
						</a>
					</h1>
				</a>
			</Link>
			<body>
				{/* <div className={'container mx-auto grid grid-cols-2 sm:grid-cols-3'}>
					<ul>
						{languages.map(language => {
							return (
								<li key={language} className="text-center border-2  border-purple-500">
									<Link href={`/${language.toLowerCase()}`}>
										<a>{language.toLowerCase()}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div> */}
				<Component {...pageProps} />
			</body>
			<footer className={'flex justify-center w-full my-4'}>
				Powered by&nbsp;
				<b>
					<a href="mailto:minho.yoo.dev@gmail.com">MYNO</a>
				</b>
			</footer>
		</div>
	);
}

export default MyApp;
