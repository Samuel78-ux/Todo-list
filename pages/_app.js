import Layout from '../components/ui/Layout/Layout.jsx';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
