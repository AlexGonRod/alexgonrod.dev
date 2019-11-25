module.exports = {
	siteMetadata: {
		title: `alexgonrod.io`,
		description: `alexgonrod.io website`,
		author: `@deepinsd83`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-reading-time`,
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `alexgonrod.io website`,
				short_name: `blog`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
