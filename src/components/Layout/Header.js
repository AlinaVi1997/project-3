import React from 'react';
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AuthModal from "../AuthModal/AuthModal";
import '../../src/scss/header.scss';
import ButtonSub from "../ButtonSub/ButtonSub";
import MainMenu  from "../nav/MainMenu";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '300px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const styleClose = {
  position: 'absolute',
  top: '0',
  right: '0',
  color: '#fff',
  'z-index': '9999',
};
const primaryMenu = {
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <header>
      <div className=" container">
        <div className='header-wrapper'>
          <div className='header-grid'>
            <div className='header-nav'>
              <IconButton onClick={handleOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <IconButton onClick={handleClose} sx={styleClose}>
                    <CloseIcon />
                  </IconButton>
                  <BurgerMenu {...primaryMenu} />
                </Box>
              </Modal>
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
