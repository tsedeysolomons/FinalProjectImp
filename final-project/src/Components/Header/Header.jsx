import React from 'react';
import classes from './Header.module.css';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from 'react-bootstrap/Button';
//import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <section>
      <div className={`${classes.header_upperLink}`}>
        <PriorityHighRoundedIcon />Important:
        <span className={`${classes.header_upperLinkBlack}`}>Reminder on carriage of personal electronic devices</span>
      </div>
      <div className={`${classes.header_container}`}>
        <div className={`${classes.header_links}`}>
          <p className={`${classes.logo}`}>A</p>
          <p className={`${classes.single_link}`}>BOOK</p>
          <p className={`${classes.single_link}`}>MANAGE</p>
          <p className={`${classes.single_link}`}>WHERE YOU GO</p>
          <p className={`${classes.single_link}`}>HELP</p>
          <p className={`${classes.theGap}`}></p>
          <p className={`${classes.single_link}`}><SearchIcon /></p>
          <p className={`${classes.single_link}`}><AccountCircleIcon /> <Button variant="primary">Log In</Button></p>
        </div>
      </div>
    </section>
    
    
  );
}

export default Header;

