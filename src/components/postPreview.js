import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const PostPreview = ({ path, title, date, tags, img, excerpt, time }) => {
	return (
		<>
			<div className="img">
				<Img className="card-img" fluid={img} />
			</div>
			<ul
				className="card-meta-tags"
				style={{
					display: `flex`,
					flexDirection: `row`,
					flexWrap: `wrap`,
					margin: `15px 0`,
					padding: `0`,
				}}
			>
				{tags.map(tag => {
					return (
						<li
							className="meta-tag"
							key={tag}
							style={{
								flexGrow: 0.1,
								listStyle: `none`,
								padding: 0,
								margin: `0 10px 0 0`,
								background: `antiquewhite`,
								textAlign: `center`,
							}}
						>
							{tag}
						</li>
					)
				})}
			</ul>
			<h3
				style={{
					color: `#000000e5`,
					fontSize: 24,
					padding: `8px 0 4px`,
					fontWeight: 600,
					margin: `16px 0`,
				}}
			>
				<Link to={path} style={{ textDecoration: `none`, color: `#000000` }}>
					{title}
				</Link>
			</h3>
			<div
				className="card-meta"
				style={{
					display: `flex`,
					flexDirection: `row`,
					justifyContent: `flex-start`,
					margin: `16px 0 0`,
				}}
			>
				<time
					className="card-meta-date"
					style={{ fontSize: `1rem`, margin: `0 5px 16px 0` }}
				>
					{date}
				</time>
				/
				<span style={{ fontSize: `1rem`, margin: `0 0 16px 5px` }}>
					{time} minutos de lectura
				</span>
			</div>
			<p
				className="card-excerpt"
				style={{ fontSize: `.8em`, margin: `16px 0` }}
			>
				{excerpt}
			</p>
		</>
	)
}

export default PostPreview
