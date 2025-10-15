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
  const handleOverlayClick = () => setToggle(false);

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
      {toggle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99,
          }}
        >
          <NavigationBar toggle={toggle} onLinkClick={() => setToggle(false)} />
          <div
            className="sidebar-overlay"
            onClick={handleOverlayClick}
            style={{
              position: "fixed",
              top: 0,
              left: "50vw",
              width: "50vw",
              height: "100vh",
              background: "rgba(0,0,0,0.15)",
              zIndex: 99,
            }}
          />
        </div>
      )}
      <NavigationBar toggle={toggle} />
    </div>
  );
};

export default Header;
