import React from 'react'
import classes from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className={`${classes.header_container}`}>
        <div className={`${classes.header_links}`}>
          {/* <img className={`${classes.single_link}`} src="#" alt="" /> */}
          <p className={`${classes.logo}`}>A</p>
          <p className={`${classes.single_link}`}>BOOK</p>
          <p className={`${classes.single_link}`}>MANAGE</p>
          <p className={`${classes.single_link}`}>WHERE YOU GO</p>
          <p className={`${classes.single_link}`}>HELP</p>
          <p className={`${classes.theGap}`}></p>
          <p className={`${classes.single_link}`}><SearchIcon /></p>
          <p className={`${classes.single_link}`}><AccountCircleIcon  />LOG IN</p>
        </div>

        
    </div>  
  )
}

export default Header