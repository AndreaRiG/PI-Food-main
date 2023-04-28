import React from "react";
import styles from "./paginado.module.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allRecipes / recipesPerPage - 1); i++) {
        pageNumbers.push(i + 1)
    }
    return (
        <nav className={styles.contNav}>

            <div>

                {pageNumbers &&
                    pageNumbers.map(num => {
                        return <button className={styles.bottNav} key={num} onClick={() => paginado(num)}> {num} </button>
                    })}
            </div>
        </nav>
    )
};

