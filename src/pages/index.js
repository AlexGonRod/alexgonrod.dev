import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/postPreview'

import '../components/globalStyles.scss'

const IndexPage = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark

	return (
		<Layout>
			<SEO title="Home" />
			<div className="blog-posts">
				{posts
					.filter(post => post.node.frontmatter.title.length > 0)
					.map(({ node: post }) => {
						return (
							<div className="blog-post-preview" key={post.id}>
								<PostPreview
									path={post.frontmatter.path}
									title={post.frontmatter.title}
									date={post.frontmatter.date}
									tags={post.frontmatter.tags}
								/>
							</div>
						)
					})}
			</div>
		</Layout>
	)
}

export default IndexPage

export const postQuery = graphql`
	query indexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					frontmatter {
						path
						title
						date
						tags
					}
				}
			}
		}
	}
`
