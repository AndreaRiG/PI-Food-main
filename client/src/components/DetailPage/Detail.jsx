import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../../redux/actions/index";
import styles from "./Detail.module.css"


const Detail= ()=>{
    const params = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state)=> state.detail)

    
    useEffect(()=>{
        dispatch(recipeDetail(params.id))
    },[dispatch,params.id]);
    
    console.log(recipe.diets)



    return(
        <div className={styles.container}>
            {
                 recipe 
                  ? 
                 <div>
                 <h1>{recipe.title}</h1>
                 <img src={recipe.image} alt="img" className={styles.image}/>
                 <h2>Summery: {recipe.summary?.replace(/<[^>]*>/g, "")}</h2>
                 <h2>Health Score: {recipe.healthScore}</h2>
                 <h2>Instructions: {recipe.instructions?.replace(/<[^>]*>/g, "")}</h2>
                 
                 <h3>Diets:{recipe.diets && Array.isArray(recipe.diets) ?
                     recipe.diets.map(el => el.name).join(" ,") :
                     recipe.diets
                        }
                        </h3>
                 </div>
                : 
                <p>Loading</p>

              
            } 

        
        </div>
        

    )

}





export default Detail;