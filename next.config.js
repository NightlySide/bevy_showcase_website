/** @type {import('next').NextConfig} */

import withPlugins from "next-compose-plugins";
import optimizedImages from "next-optimized-images";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = withPlugins([[optimizedImages, {}]], {
	reactStrictMode: true,
	images: {
		domains: ["cdn.discordapp.com"]
	},
	assetPrefix: isProd ? "https://nightlyside.github.io/bevy_showcase_website/" : ""
});

export default nextConfig;
