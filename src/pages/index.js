import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/postPreview'

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
									tags={post.frontmatter.tags}
									title={post.frontmatter.title}
									date={post.frontmatter.date}
								/>
							</div>
						)
					})}
			</div>
		</Layout>
	)
}

export default IndexPage

export const dataQuery = graphql`
	query postQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
          id
					frontmatter {
						date(locale: "")
						description
						lenguage
						path
						title
						tags
					}
				}
			}
		}
	}
`
