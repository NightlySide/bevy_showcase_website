import { Link, Text, WrapItem } from "@chakra-ui/react";
import styles from "./project_card.module.css";

interface ProjectCardProps {
	slug: any;
	frontmatter: any;
}

const ProjectCard = (props: ProjectCardProps) => {
	return (
		<WrapItem className={styles.warp_item}>
			<div className={styles.card}>
				<Link href={`/apps/${props.slug}`}>
					<div className={styles.card_content}>
						<h1 className="">{props.frontmatter.title}</h1>
					</div>
				</Link>
			</div>
		</WrapItem>
	);
};

export default ProjectCard;
