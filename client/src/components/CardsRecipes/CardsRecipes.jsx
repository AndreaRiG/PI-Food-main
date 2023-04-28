// import React from "react";
// import Cardt from "../Card/Cardt"
// import styles from "./CardsRecipes.module.css";

// const CardsRecipes = ({image, title, diets, id})=>{
//     return(
       
//     <>
//     <div className={styles.conteiner}>
//         <Cardt key={id} image={image} title= {title} diets={diets} id={id}/>
//     </div>
//     </>
// )

// }
        
//         export default CardsRecipes;
    

import React from "react";
import Cardt from "../Card/Cardt";
import styles from "./CardsRecipes.module.css"

const CardsRecipes = ({image, title, diets, id})=>{

return (
    <>
    <div className={styles.cardsTodas}>
        <Cardt key={id} image={image} title= {title} diets={diets} id={id}/>
    </div>
    </>
)

}



export default CardsRecipes;