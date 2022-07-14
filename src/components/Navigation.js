import React from "react";
import { NavLink } from "react-router-dom";

//0// Création du composant Navigation
//1// import de la Navlink via react-router-dom
//L12// création de la ternaire pour apliquer la class active via une fonction fléchée anonyme
//la class css nav-active va ajouter une barre bleur pour indiquer à l'utilisateur sur quelle page il se trouve

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
