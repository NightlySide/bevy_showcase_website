import { HStack, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./navbar.module.css";
import logo from "../../public/bevy_assets_logo.svg";
import Link from "next/link";

const Navbar = () => {
	return (
		<HStack className={styles.container}>
			<div className={styles.logo}>
				<Link href="/" passHref>
					<Image src={logo} alt="Bevy assets logo" />
				</Link>
			</div>
			<Spacer />
			<Link href="" passHref>
				<Text fontSize="xl" className={styles.link}>
					Learning
				</Text>
			</Link>
			<Link href="" passHref>
				<Text fontSize="xl" className={styles.link}>
					Assets
				</Text>
			</Link>
			<Link href="" passHref>
				<Text fontSize="xl" className={styles.link}>
					Apps
				</Text>
			</Link>
			<Link href="" passHref>
				<Text fontSize="xl" className={styles.link}>
					About
				</Text>
			</Link>
		</HStack>
	);
};

export default Navbar;
