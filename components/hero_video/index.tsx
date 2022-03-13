import { Center, Container, Text, VStack } from "@chakra-ui/react";
import styles from "./hero_video.module.css";

const HeroVideo = () => {
	return (
		<div className={styles.container}>
			<div className={styles.video_container}>
				<video className={styles.video} loop autoPlay muted>
					<source src="/hero_video.mp4" type="video/mp4" />
				</video>
			</div>
			<div className={styles.text}>
				<Center h="100%" w="100%">
					<VStack>
						<Text fontSize="6xl">Welcome to Bevy showcase</Text>
						<Text fontSize="2xl">The new place to show your work and share your bevy project</Text>
					</VStack>
				</Center>
			</div>
		</div>
	);
};

export default HeroVideo;
