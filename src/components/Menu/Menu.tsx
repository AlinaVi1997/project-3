import {NavLink} from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";
import "./Menu.scss";

interface IMenuProps {
    isMenuOpen: boolean;
}
   export function Menu ({ isMenuOpen }: IMenuProps) {

    // const listItems = props.links.map((item, index) =>
    //     <li key={index}>
    //         <NavLink to={ item.path }>{ item.link }</NavLink>
    //     </li>
    // );

    return (
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
            <div className='burger-menu-wrapper'>
                <h1 className='burger-menu-title'>Usa</h1>
                <nav className='burgerlist-items'>
                    <ul className='burgerlist-item'>
                        {/*{ listItems }*/}
                        <li>
                            <a href='#'>Subscribe now</a>
                        </li>
                        <AuthModal />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

Menu.defaultProps = {
    class: 'nav',
    links: [
        {
            link: "News",
            path: "/",
        },
        {
            link: "Link",
            path: "/",
        },
    ]
}
