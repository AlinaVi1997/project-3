import { NavLink } from 'react-router-dom';
import ButtonSub from "../ButtonSub/ButtonSub.js";
import AuthModal from "../AuthModal/AuthModal.js";
import '../BurgerMenu/BurgerMenu.scss';

const BurgerMenu = (props) => {

	const listItems = props.links.map((item, index) =>
		<li key={index}>
			<NavLink to={ item.path }>{ item.link }</NavLink>
		</li>
	);

	return (
		<div className='burger-menu-wrapper'>
			<h1 className='burger-menu-title'>Ua</h1>
			<nav className='burgerlist-items'>
				<ul className='burgerlist-item'>{ listItems }
					<ButtonSub />
					<AuthModal />
				</ul>
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
