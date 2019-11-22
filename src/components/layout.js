import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

import Header from './header'
import './layout.css'
import './globalStyles.scss'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					description
					title
				}
			}
		}
	`)
	const { title, social } = data.site.siteMetadata

	return (
		<>
			<Header siteTitle={title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				<main>{children}</main>
				<Footer	/>
			</div>
		</>
	)
}

export default Layout
