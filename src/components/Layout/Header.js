import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AuthModal from "../AuthModal/AuthModal.js";
import '../../src/scss/header.scss';
import ButtonSub from "../ButtonSub/ButtonSub.js";
import { Menu } from "../Menu/Menu.tsx";
import { ReactDimmer } from "react-dimmer";
import MainMenu  from "../nav/MainMenu.js";


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
  const [isMenuOpen, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header>
      <div className=" container">
        <div className='header-wrapper'>
          <div className='header-grid'>
            <div className='header-nav'>
              <div className='burger-inner'>
              <div className="burger-menu" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
                <Menu isMenuOpen={isMenuOpen}  />
                {/*{<BurgerMenu{...primaryMenu} />}*/}
              </div>
              <ReactDimmer
                isOpen={isMenuOpen}
                exitDimmer={setMenu}
                zIndex={100}
                blur={1.5}
              />
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
