import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ path, title, date, tags }) => {
	return (
		<>
			<h1>
				<Link to={path}>{title}</Link>
			</h1>
			<h2>{date}</h2>
			<ul>
				{tags.map(tag => {
					return <li className='tag' key={tag}>{tag}</li>
				})}
			</ul>
		</>
	)
}

export default PostPreview
