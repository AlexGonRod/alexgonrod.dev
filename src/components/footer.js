import React from 'react'
import GitHub from './gitHub'
import Twitter from './twitter'
import LinkedIn from './linkedIn'

const Footer = () => {
	// eslint-disable-next-line no-return-assign
	return (
		<footer>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a>
			<a href='`https://twitter.com/deepinsd`'>
				<Twitter />
			</a>
			<a href='https://www.linkedin.com/in/alex-gonzalez-rodriguez/'>
				<LinkedIn />
			</a>
			<a href='https://github.com/AlexGonRod/'>
				<GitHub />
			</a>
		</footer>
	)
}

export default Footer
