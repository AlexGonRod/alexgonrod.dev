import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/postPreview'

const IndexPage = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark

	return (
		<Layout>
			<SEO title="Home" />
			<div className="blog-posts" style={{ padding: `15px` }}>
				{posts
					.filter(post => post.node.frontmatter.title.length > 0)
					.map(({ node: post }) => {
						const { path, tags, title, date, img } = post.frontmatter

						return (
							<div className="blog-post-preview" key={post.id}>
								<PostPreview
									path={path}
									tags={tags}
									title={title}
									excerpt={post.excerpt}
									date={date}
									img={img.childImageSharp.fluid}
									time={post.timeToRead}
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
					excerpt
					timeToRead
					frontmatter {
						date
						description
						lenguage
						path
						title
						tags
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
		}
	}
`
