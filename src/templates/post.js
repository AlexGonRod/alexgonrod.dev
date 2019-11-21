import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const Post = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<div className="blog-post-container">
			<SEO title={post.frontmatter.title} />
			<Helmet title={post.frontmatter.title} />
			<div className="blog-post">
				<h1>{post.frontmatter.title}</h1>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</div>
		</div>
	)
}

export default Post
export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(locale: "")
				description
				lenguage
				path
				title
			}
		}
	}
`
