// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Card.module.css"


// const Cardt = ({image, title, diets, id})=>{
// return(
//     <>
//     <div className={styles.contenedor}>
//      <Link to={`/detail`}>
//      <h1>{title}</h1> 
//     </Link> 
        
//         <h2>{diets}</h2>
//         <img src={image} alt="img"/>
//     </div>
//     </>
// )

// };


// export default Cardt;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"


const Cardt = ({image, title, diets, id})=>{
return(
    <>
    <div className={styles.contenedor}>
    <Link to={`/detail/${id}`}>
         <h1>{title}</h1>
    </Link>
        <h2>{diets}</h2>
        <img src={image} alt="img"/>
    </div>
    </>
)

};


export default Cardt;