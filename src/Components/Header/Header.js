import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { clickOverLogo } from "../../Redux/LogoEventAction";
import logo from "../../../utils/img/mpv.png";
import ham from "../../../utils/img/ham.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Acción al hacer clic en el logo
  const handleClickLogo = (e) => {
    e.preventDefault();
    dispatch(clickOverLogo("/"));
    navigate("/");
  };

  // Toggle del menú móvil
  const handleClickToggle = () => setToggle(!toggle);

  return (
    <div className="container hide-container">
      <div className="logo">
        <p onClick={handleClickLogo}>Manuel Pérez</p>
        <img src={logo} alt="Logo MPV" />
        <img
          src={ham}
          alt="Toggle Menu"
          className="menu"
          id="menu"
          onClick={handleClickToggle}
        />
      </div>
      <NavigationBar toggle={toggle} />
    </div>
  );
};

export default Header;
