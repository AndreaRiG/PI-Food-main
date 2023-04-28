import React from "react";
// import { getRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from './Landing.module.css';



const LandingPage = () => {

    return (
       
            <div className={styles.container}>
                
                    <div className={styles.title}>
                        <h1 className={styles.first}>Healthy Recipes</h1>
                        <h1 className={styles.second}>For Everyone!</h1>
                        <h3 className={styles.fourth}>from the world, to your kitchen!.</h3>
                    </div>

                <Link to='/home'>
                    <button className={styles.button}>START</button>
                </Link>
            </div>


        
    )


};




export default LandingPage;