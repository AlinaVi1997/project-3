import React from 'react';
import { NavLink } from 'react-router-dom';
const BurgerMenu = (props) => {
	const listItems = props.links.map((item, index) =>
		<li key={index}>
			<NavLink to={ item.path }>{ item.link }</NavLink>
		</li>
	);

	return (
		<div className='burger-menu-wrapper'>
			<nav className='burgerlist-items'>
				<ul className='burgerlist-item'>{ listItems }</ul>
			</nav>
		</div>
	);
}

BurgerMenu.defaultProps = {
	class: 'nav',
	links: [
		{
			link: "Link",
			path: "/",
		},
		{
			link: "Link",
			path: "/",
		},
	]
}

export default BurgerMenu;
