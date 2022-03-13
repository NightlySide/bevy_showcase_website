/** @type {import('next').NextConfig} */

import withPlugins from "next-compose-plugins";
import optimizedImages from "next-optimized-images";

const nextConfig = withPlugins([[optimizedImages, {}]], {
	reactStrictMode: true,
	images: {
		domains: ["cdn.discordapp.com"]
	}
});

export default nextConfig;
