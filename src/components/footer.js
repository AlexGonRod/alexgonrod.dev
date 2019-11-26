import React from 'react'
import GitHub from './GitHub'
import Twitter from './Twitter'
import LinkedIn from './LinkedIn'

const Footer = () => {
	// eslint-disable-next-line no-return-assign
	return (
		<footer>
			<React.Fragment>
				<a
					href="https://twitter.com/deepinsd"
					className="twitter-icon"
					target="_blank"
				>
					<Twitter />
				</a>
				<a
					href="https://www.linkedin.com/in/alex-gonzalez-rodriguez/"
					className="linked-icon"
					target="_blank"
				>
					<LinkedIn />
				</a>
				<a
					href="https://github.com/AlexGonRod/"
					className="github-icon"
					target="_blank"
				>
					<GitHub />
				</a>
			</React.Fragment>
		</footer>
	)
}

export default Footer
