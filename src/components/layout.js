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
	const { title } = data.site.siteMetadata

	return (
		<>
			<Header siteTitle={title} />
			<div>
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
