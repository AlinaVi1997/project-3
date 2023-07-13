import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AuthModal from "../AuthModal/AuthModal.js";
import '../../src/scss/header.scss';
import ButtonSub from "../ButtonSub/ButtonSub.js";
import MainMenu  from "../nav/MainMenu.js";
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";

import Modal from 'react-modal';

let primaryMenu = {
  links: [
    {
      link: "News",
      path: "/"
    },
    {
      link: "Sport",
      path: "/news/sport"
    },
    {
      link: "Business",
      path: "/news/business"
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
  const openModal = () => {
    setShowMenu(true);
  };

  const closeModal = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className=" container">
        <div className='header-wrapper'>
          <div className='header-grid'>
            <div className='header-nav'>
              <div className='burger-inner'>
                <div className='burger-menu' onClick={openModal}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Modal className='burger-modal' isOpen={showMenu} onRequestClose={closeModal}>
                <div
                className={ setShowMenu? 'burger-menu active': 'burger-menu'}
                onClick={toggleMenu}>
              </div>
              {showMenu && <BurgerMenu {...primaryMenu} />}
                </Modal>
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
          <MainMenu{...primaryMenu} />
        </div>
      </div>
    </header>
  )
}
export default Header;
