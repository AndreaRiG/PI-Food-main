import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { getRecipeByTitle } from "../../redux/actions";
import styles from "./SearchBar.module.css"


const SearchBar = ()=>{

    const dispatch= useDispatch();

    const [title, setTitle] = useState("");

    const handleInputChange = (e)=>{
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(getRecipeByTitle(title));
        setTitle("");
    }

    return(
        <div className={styles.search}>
        <input type="text" placeholder="Buscar..." value={title}  onChange={(e)=>handleInputChange(e)} />
        <button type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )

}




export default SearchBar;