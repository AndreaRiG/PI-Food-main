import React from "react";
import { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, filterByDiet, orderByName, filterCreated, orderByHealthScore } from "../../redux/actions";


import Paginado from "../Paginado/Paginado";
import styles from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import CardsRecipes from "../CardsRecipes/CardsRecipes";




const Home = () => {

    const dispatch = useDispatch();//con useSelector, declaro una constante y traeme todo lo que está en el estado de state.recipes, en este caso tambien diets

    const allRecipes = useSelector((state) => state.recipes);   //const allDiets = useSelector((state) => state.diets);
    const [currentPage, setCurrentPage] = useState(1) //le pongo esto de useState por que es un estado local
    const [recipesPerPage, //setRecipesPerPage
    ] = useState(9)// en estas constantes guardo cuantos personajes por página y cuantos voy a querer
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAllRecipes())
    }, [dispatch])

    ///////////////////////////////////

    // useEffect(() => {
    //     dispatch(getDiets())
    //   }, [])

    //   const diets = useSelector(state => state.diets)
    ///////////////////////////


    const handleClick = (e) => {
        dispatch(getAllRecipes(e))
    }


    //Esta constante handle cambia con los eventos por el event.target


    const handleFilterDiet = (e) => {
        dispatch(filterByDiet(e.target.value))
        setCurrentPage(1)
    }


    /////////////////////////////////////////////////

    const handleOrderByName = (e) => {
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
    }


    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }

    const handleOrderByHs = (e) => {
        dispatch(orderByHealthScore(e.target.value))
        setCurrentPage(1)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div>


                <div className={styles.name}>
                    <h1>Busca tu receta</h1>
                </div>

                <div>

                    <button className={styles.boton1} onClick={e => { handleClick(e) }} >Reload Recipes</button>
                </div>


                <div className={styles.name1} >

                    <select onChange={handleOrderByName}>
                        <option value="">Order By Name</option>
                        <option value="asc">Order A to Z</option>
                        <option value="des">Order Z to A</option>
                    </select>

                </div>
                <div className={styles.name2}>
                    <select onChange={handleOrderByHs}>
                        <option value=""> HealthScore Order </option>
                        <option value="asc">Low to High</option>
                        <option value="des">High to Low </option>
                    </select>
                </div>


                <div className={styles.name3}>
                    <select onChange={e => handleFilterDiet(e)}>
                        <option value="">Filter by diet</option>
                        console.log(aqui_esta)
                        <option value="all">All</option>
                        <option value="gluten free">Gluten free</option>
                        <option value="dairy free">Dairy free</option>
                        <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="paleolithic">Paleolithic</option>
                        <option value="primal">Primal</option>
                        <option value="whole 30">Whole 30</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="fodmap friendly">Fodmap friendly</option>
                    </select>
                </div>



                <div className={styles.name4}>
                    <select onChange={handleFilterCreated}>
                        <option value="all">All Recipes</option>
                        <option value="api">Api Recipes</option>
                        <option value="bdd">Recipes created</option>
                    </select>
                </div>






                <Paginado className={styles.paginadoHome} recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginado={paginado} />
                <div>
                    <p>Actual Page: {currentPage}</p>
                    <button onClick={handlePrevPage}>Previous Page</button>
                    <button onClick={handleNextPage}>Next Page</button>
                </div>


                <SearchBar />
                <div>
                    {
                        currentRecipes?.map((r) => (
                            <CardsRecipes

                                key={r.id} title={r.title} image={r.image} diets={r.diets} id={r.id} />
                        ))

                    }
                </div>

            </div>

        </>
    )
}




export default Home;
