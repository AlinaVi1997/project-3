import MainMenu from '../nav/MainMenu.js';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";
import AuthModal from "../AuthModal/AuthModal.js";

import '../../src/scss/header.scss';
import ButtonSub from "../ButtonSub/ButtonSub.js";

let primaryMenu = {
  links: [
    {
      link: "News",
      path: "/"
    },
    {
      link: "Sport",
      path: "/sport"
    },
    {
      link: "Entertainment",
      path: "/entertainment"
    },
    {
      link: "Life",
      path: "/life"
    },
    {
      link: "Money",
      path: "/money"
    },
    {
      link: "Tech",
      path: "tech"
    },
    {
      link: "Travel",
      path: "/travel"
    },
    {
      link: "Opinion",
      path: "/opinion"
    },
    {
      link: 'Weather',
      path: "/weather"
    },
  ]
};

function Header(){
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className=" container">
        <div className='header-wrapper'>
          <div className='header-grid'>
            <div className='header-nav'>
              <div className='burger-inner'>
                <div
                  className={ setShowMenu? 'burger-menu active': 'burger-menu'}
                  onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {showMenu && <BurgerMenu {...primaryMenu} />}

              </div>
              <div className='icon-search'>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <h1 className='header-title'>Usa today</h1>
            <div className='header-info'>
              <AuthModal />
              <ButtonSub />
            </div>
          </div>
            < MainMenu {...primaryMenu}/>
        </div>
      </div>
    </header>
  )
}
export default Header;
