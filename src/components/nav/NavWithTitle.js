import { Link } from 'react-router-dom';
import React from 'react';

const NavWithTitle = (props) => {
	const listItems = props.links.map((item) =>
		<li className='item' key={item.id}>
			<Link to={ item.path }>{ item.link }</Link>
		</li>
	);

	return (
		<nav className='nav-items'>
				<ul className='list'>{ listItems }</ul>
		</nav>
	);
}

NavWithTitle.defaultProps = {
	links: [
		{
			id: 'n-de-1',
			link: "about",
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

export default NavWithTitle;