import { useEffect, useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

import Link from 'next/link'

import style from '../styles/LandingPageNav.module.css';

const MenuItem = ({ itemName, className, title }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.querySelector(`[title="${itemName}"]`));
  }, [itemName]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessability!
   */
  return (
      <a href={`#${itemName}`}
         onClick={handleClick}
         className={className}
         aria-label={`Scroll to ${itemName}`}>
         {title}
      </a>
  );
};

const LandingPageNav = () => {
  const [dark, setDark] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll >= lastScroll && currentScroll >= window.innerHeight - 50) {
      setDark(true);
    }

    if (currentScroll < lastScroll && currentScroll < window.innerHeight + 50) {
      setDark(false);
    }

    if (currentScroll >= lastScroll && currentScroll >= window.innerHeight * 2 - 50) {
      setDark(false);
    }

    setLastScroll(currentScroll);
    
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [dark, lastScroll]);

  return (
    <nav className={style.navbar}>
        <MenuItem className={dark ? style.navbarAnchorDark : style.navbarAnchor} itemName="about" title="About" />
        <MenuItem className={dark ? style.navbarAnchorDark : style.navbarAnchor} itemName="getStarted" title="Get Started" />
        <Link href="/test">
          <a>test</a>
        </Link>
    </nav>
  );
};

export default LandingPageNav;