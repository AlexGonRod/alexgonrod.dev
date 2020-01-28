import React, { useState } from 'react'
import { Link } from 'gatsby'

// import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'

const Header = ({ siteTitle }) => {
	// const [theme, setTheme] = useState('light')

	// const toogleListener = () => {
	// 	if (theme === 'light') {
	// 		setTheme('dark')
	// 	}
	// 	setTheme('light')
	// }

	return (

			<>
				<header
					style={{
						background: `rebeccapurple`,
					}}
				>
					<div
						style={{
							margin: `0 auto`,
							maxWidth: 960,
							padding: `1.45rem 1.0875rem`,
						}}
					>
						<h1 style={{ margin: 0 }}>
							<Link
								to="/"
								style={{
									color: `white`,
									textDecoration: `none`,
								}}
							>
								{siteTitle}
							</Link>
						</h1>
					</div>
					{/* <button className="btn" onClick={toogleListener}>Toogle</button> */}
				</header>
			</>
		// </ThemeProvider>
	)
}

export default Header
