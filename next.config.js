/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
		FILE_URL: process.env.FILE_URL,
	},
};

module.exports = nextConfig;
