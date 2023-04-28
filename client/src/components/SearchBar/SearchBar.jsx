import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { getRecipeByTitle } from "../../redux/actions";


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
        <div>
        <input type="text" placeholder="Buscar..." value={title}  onChange={(e)=>handleInputChange(e)} />
        <button type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )

}




export default SearchBar;