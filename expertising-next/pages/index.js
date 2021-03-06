import Head from "next/head";
import styles from "../styles/Home.module.css";
import { server } from "../config/index";

export default function Home({ eom }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{eom.name}
				<h1 className="text-lg text-2xl font-medium text-center sm:text-3xl md:text-4xl">
					Sajid Sulaiman Is Using NextJS
				</h1>
				<p className="mt-3 text-blue-400">
					NextJS makes React And life much easier
				</p>
				<p className="mt-4 text-xs uppercase text-gray-600">
					Also, using <span className="font-semibold">tailwindcss</span> and
					<span className="font-semibold"> material-ui</span> is a benefit
				</p>
			</main>
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const res = await fetch(`${server}/eom`);
	const eom = await res.json();

	return {
		props: {
			eom,
		},
	};
};
