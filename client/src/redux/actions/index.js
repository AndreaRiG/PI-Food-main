import axios from 'axios';

import { 
    GET_ALL_RECIPES,
    GET_RECIPE_BY_TITLE,
    RECIPE_DETAIL,
    GET_DIETS,
    FILTER_BY_DIET,
    ORDER_BY_NAME,
    FILTER_CREATED,
    ORDER_BY_HEALTH_SCORE,
} from "./actionsTypes";


        //-si fuera con fetch iría en vez de axios.get la palabra fetch
        //-- dicen que cambia la estructura de datos hay que poner el .then
        //         fetch('http://example.com/movies.json')
        //   .then(response => response.json())
        //   .then(data => console.log(data));





        export const getAllRecipes = ()=>{
            return async function(dispatch){
        
                const json = await axios.get(("http://localhost:3001/recipe"))
                const data = json.data;
                
             return dispatch({type: GET_ALL_RECIPES, payload: data})
            }
        }



export const getRecipeByTitle = (title) => {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/recipe?title=${title}`)
            const data = json.data;

            return dispatch({ 
                type: GET_RECIPE_BY_TITLE, 
                payload: data })
        } catch (error) {
            return alert("error")
        }

    }
}

//export const getLoquemePidan =(piden) =>{}



export const recipeDetail = (id)=>{
    return async function(dispatch){
        try{

            const json = await axios.get(`http://localhost:3001/recipe/${id}`);
            const data = json.data;
            return dispatch({type: RECIPE_DETAIL, payload: data})
        }catch(error){
            return alert(error.message)
        }

    }

}


export const getDiets = ()=>{
    return async function(dispatch){
        const json= await axios.get("http://localhost:3001/diet");
        const data = json.data;

        return dispatch({type: GET_DIETS, payload: data})
    }
};


export const createRecipe = (payload)=>{
    return async function(dispatch){
        
     const data = await axios.post("http://localhost:3001/recipe", payload)
         return data;   
    }

};


export const filterByDiet = (payload)=>{
return{
    type: FILTER_BY_DIET,
    payload
}
}



export const filterCreated = (payload)=>{
    // console.log(payload)
     return{
         type: FILTER_CREATED,
         payload
     }
 }


 export const orderByName = (payload)=>{
    console.log(payload)
return {
    type: ORDER_BY_NAME,
    payload
}
}


export const orderByHealthScore = (payload)=>{
    return{
        type: ORDER_BY_HEALTH_SCORE,
        payload
    }
}