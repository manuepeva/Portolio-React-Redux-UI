import Navigation from "../Navigation/Navigation";
import React from "react";
import logo from "../../img/mpv.png";
import ham from "../../img/ham.png";
import { useDispatch } from "react-redux";
import { clickOverLogo } from "../../Redux/LogoEventAction";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const ClickOnLogo = () => dispatch(clickOverLogo());
  const HandleClickLogo = (e) => {
    e.preventDefault();
    ClickOnLogo();
  };
  const handleClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container hide-container">
      <div className="logo">
        <p onClick={HandleClickLogo}>Manuel Pérez</p>
        <img src={logo} alt="Logo MPV" />
        <img
          src={ham}
          alt="Toggle Menu"
          className="menu"
          id="menu"
          onClick={handleClickToggle}
        ></img>
      </div>
      <Navigation toggle={toggle} />
    </div>
  );
};

export default Header;
