import { NavLink } from 'react-router-dom';

const MainMenu = (props) => {
  const listItems = props.links.map((item, index) =>
      <li key={index}>
        <NavLink to={ item.path }>{ item.link }</NavLink>
      </li>
  );

  return (
      <nav className='list-items'>
        <ul className='list-item'>{ listItems }</ul>
      </nav>
  );
}

MainMenu.defaultProps = {
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

export default MainMenu;