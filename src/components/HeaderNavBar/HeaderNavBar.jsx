import React, { useState } from "react";
import { LinksData } from "./LinksData";
import { Link } from "react-router-dom";
import * as TiIcon from "react-icons/ti";
import "./index.css";

export const HeaderNavBar = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div className="headerNavBar__container">
      <div className="headerNavBar__leftSide">
        <h2 className="headerNavBar__textLogo">NavBar Responsive</h2>
      </div>
      <div className="headerNavBar__rightSide">
        <div className="headerNavBar__links" id={showLinks ? "hidden" : ""}>
          <ul className="headerNavBar__menu">
            {LinksData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="headerNavBar__button"
        >
          <TiIcon.TiThMenu className="headerNavBar__hamburguer-Menu" />
        </button>
      </div>
    </div>
  );
};
