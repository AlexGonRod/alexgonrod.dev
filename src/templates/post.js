import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const Post = ({ data }) => {
	const { markdownRemark } = data
	const { html, frontmatter } = markdownRemark
	const {
		img: {
			childImageSharp: { fluid: img },
		},
	} = frontmatter

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div className="blog-post-container">
				<div className="Topmedia">
					<Img className="details-img" fluid={img} />
				</div>
				<Helmet title={frontmatter.title} />
				<div
					className="blog-post"
					style={{
						margin: `16px auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0,
					}}
				>
					<h1>{frontmatter.title}</h1>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Post
export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(locale: "")
				description
				lenguage
				path
				tags
				title
				img {
					childImageSharp {
						fluid(maxWidth: 600) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
