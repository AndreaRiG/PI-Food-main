import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"


const NavBar = () => {

  return (
    <>
      <nav className={styles.mainContainer}>

        <button className={styles.boton2}>
          <NavLink to="/home">
            <div>
              Home
            </div>
          </NavLink>
        </button>
        <NavLink to="/create">
          <button className={styles.boton3}>Crear receta</button>
        </NavLink>
      </nav>
    </>
  )

}


export default NavBar;