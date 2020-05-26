import React, { useState } from 'react';
import { nowUOrange } from '../../assets';

// TopNav component pulled directly from homepage with style class names
// any changes to the original nav will be reflected here as well

const TopNav = () => {
  const [navOpen, setNav] = useState('topnav');

  const toggleNav = () => setNav((prev) => (prev === 'topnav' ? 'topnav responsive' : 'topnav'));

  return (
    <div className="NavContainer campaign_nav">
      <div className="navcontent">
        <div className="LogoContainer">
          <a href="/#Home">
            <img id="Logo" src={nowUOrange} alt="now-u logo" />{' '}
          </a>
        </div>

        <nav id="navigation">
          <div className={navOpen} id="myTopnav">
            <ul>
              <li>
                <a href="/#Home" className="btn active">
                  Home<span></span>
                </a>
              </li>
              <li>
                <a href="/#campaigns" className="btn">
                  Campaigns<span></span>
                </a>
              </li>
              <li>
                <a href="/#our_story" className="btn">
                  Our Story<span></span>
                </a>
              </li>
              <li>
                <a href="/#the_app" className="btn">
                  Our App<span></span>
                </a>
              </li>
              <li>
                <a href="/#get_involved" className="btn">
                  Get Involved<span></span>
                </a>
              </li>
              <li id="signup_btn">
                <a href="/#get_involved" className="btn">
                  Sign up to hear from us
                </a>
              </li>
            </ul>

            <a href="javascript:void(0)" className="nav_icon" onClick={toggleNav}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;

// save for later
// <div className={classes.navContainer}>
//   <div className={classes.logoContainer}>
//     <Link to={'/'}>
//       <img className={classes.logo} src={nowUOrange} alt="logo" />
//     </Link>
//   </div>
//   <nav id="navigation">
//     <div className={classes.topNav} id="myTopNav">
//       <ul className={classes.navMenu}>
//         {navLinks.map(({ display, path }) => {
//           return (
//             <li>
//               <NavLink key={display} className={classes.navLink} to={path}>
//                 {display}
//               </NavLink>
//             </li>
//           );
//         })}
//         <li id="signup_btn">
//           <a href="#get_involved" class="btn">
//             Sign up to hear from us
//           </a>
//         </li>
//       </ul>
//       <a href="javascript:void(0)" className="nav_icon" onClick={() => window.console.log('click')}>
//         <i className="fa fa-bars"></i>
//       </a>
//     </div>
//   </nav>
// </div>;
