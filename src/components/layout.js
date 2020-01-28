import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'

// import { GlobalStyles, lightTheme, darkTheme } from './themes'

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
		// <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				{/* <GlobalStyles /> */}
				<Header siteTitle={title} />
				<div>
					<main>{children}</main>
					<Footer />
				</div>
			</>
		// </ThemeProvider>
	)
}

export default Layout
