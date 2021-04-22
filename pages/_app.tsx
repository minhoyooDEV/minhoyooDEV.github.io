import { GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<MainWrapper>
				<Component {...pageProps} />
			</MainWrapper>
			<Footer />
		</>
	);
}

export const getStaticProps = async ({}: GetStaticProps) => {
	const res = await fetch('/api/hello');
	const result = await res.json();
	console.log(result);
	return { props: {} };
};

export default MyApp;
