import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export async function getStaticPaths() {
	const files = fs.readdirSync("content");
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", "")
		}
	}));
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }: any) {
	const fileName = fs.readFileSync(`content/${params.slug}.md`, "utf-8");
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content
		}
	};
}

export default function PostPage(params: any) {
	let content = remark().use(remarkGfm).use(remarkHtml).processSync(params.content).toString();

	return (
		<div className="">
			<h1>{params.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
