import { Link } from 'react-router-dom';
import React from 'react';

const NavWithTitleAbout= (props) => {
	const listItems = props.links.map((item) =>
		<li className='footer-about-list' key={item.id}>
			<Link to={ item.path }>{ item.link }</Link>
		</li>
	);

	return (
		<nav className='nav-items'>
				<h3 className='title'>{ props.title }</h3>
				<ul className='list'>{ listItems }</ul>
		</nav>
	);
}

NavWithTitleAbout.defaultProps = {
	links: [
		{
			id: 'n-de-1',
			link: "Link",
			path: "/"
		},
		{
			id: 'n-def-2',
			link: "Link",
			path: "/"
		},
		{
			id: 'n-def-3',
			link: "Link",
			path: "/"
		},
	]
}

export default NavWithTitleAbout;