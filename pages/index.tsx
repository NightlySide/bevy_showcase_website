import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../components/navbar";
import { FaHeart } from "react-icons/fa";
import { Container, Icon, Text, Wrap, WrapItem } from "@chakra-ui/react";
import HeroVideo from "../components/hero_video";
import ProjectCard from "../components/project_card";

export async function getStaticProps() {
	const files = fs.readdirSync("content");

	const posts = files.map((fileName) => {
		const slug = fileName.replace(".md", "");
		const readFile = fs.readFileSync(`content/${fileName}`, "utf-8");
		const { data: frontmatter } = matter(readFile);
		return {
			slug,
			frontmatter
		};
	});

	return {
		props: {
			posts
		}
	};
}

const Home: NextPage = ({ posts }: any) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | Bevy Showcase</title>
				<meta name="description" content="Bevy showcase website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<HeroVideo />

			<Container maxW="container.lg" className={styles.main}>
				<Text fontSize="2xl">Latest uploads</Text>

				<Wrap justify="center" className={styles.latest_projects}>
					{posts.map((post: any) => (
						<ProjectCard key={post.slog} frontmatter={post.frontmatter} slug={post.slug} />
					))}
				</Wrap>
			</Container>

			<footer className={styles.footer}>
				Made with <Icon className={styles.heart_icon} as={FaHeart} /> by{" "}
				<div className={styles.bevy_icon}>
					<Image
						alt="bevy bird"
						src="https://cdn.discordapp.com/emojis/692653439649316874.webp"
						width={24}
						height={20}
					/>
				</div>
			</footer>
		</div>
	);
};

export default Home;
