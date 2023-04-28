import React, {useState, useEffect} from "react";
import { createRecipe, getDiets } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Form.module.css"




const Form = ()=>{

    const dispatch= useDispatch();
   
    const diets = useSelector((state)=> state.diets)

    const [form, setForm] = useState({
        title: "",
        summary:"",
        healthScore:"",
        instructions:"",
        image:"",
        diets:[],
    })

    const [errors, setErrors] = useState({
        title: "",
        summary:"",
        healthScore:"",
        instructions:"",
        image:"",
        diets:[],
    });

    const handleChange = (e)=>{
            validate({
                     ...form,
                     [e.target.name]: e.target.value
                    })

            setForm({
            ...form,
            [e.target.name]: e.target.value
                     })     
    }

    const handleSelect = (e)=>{
        const dietId = e.target.value;
        
        
        setForm({
          ...form,
          diets: [...form.diets, dietId]
        })
      }



    const handleSubmit = (e) => {
        e.preventDefault();
        validate(form);
        if (Object.values(errors).some((error) => error !== "")) {
          return alert("Faltan datos");
        }
        dispatch(createRecipe(form));
        alert("Receta creada!");
        setForm({
          title: "",
          summary: "",
          healthScore: "",
          instructions: "",
          image: "",
          diets: [],
        });
      };
      

    useEffect(()=>{
        dispatch(getDiets())
    }, []);


    const validate = (form)=>{
         let newErrors = {};

         if (form.title) {
            newErrors.title = "";
          } else {
            newErrors.title = "Title is missing...";
          }
      
          if (!form.summary) {
            newErrors.summary = "complete abstract...";
          } else {
            newErrors.summary = "";
          }

          if (isNaN(form.healthScore)) {
            newErrors.healthScore = "This should be a number";
          } else {
            const healthScore = parseInt(form.healthScore);
            if (healthScore <= 0 || healthScore >= 100) {
              newErrors.healthScore =
                "Healtscore shoud be higher 0 and less than 100";
            }
          }

          if (!form.instructions) {
            newErrors.instructions = "complete the instruccions...";
          } else {
            newErrors.instructions = "";
          }

          if (!form.image) {
            newErrors.image = "put a image, if dosen't have, put some text...";
          } else {
            newErrors.image = "";
          }

          if (!form.diets || form.diets.length === 0) {
            newErrors.diets = "Choose a Diet";
          }

       setErrors(newErrors) 
    }


    return(
        <>
        
        
        <form  onSubmit={handleSubmit} className={styles.fondo}>
            <div>
            <h1>Crea tu receta</h1>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="titulo de tu receta" name="title" value={form.title} onChange={handleChange} />
                <br></br>
            </div>

           {errors.title && <span>{errors.title}</span>}

            <div>
            <br></br>
                <label htmlFor="summary">Summary</label>
                <textarea
                name="summary"
                placeholder="Breve descripcion" 
                onChange={handleChange}
                value={form.summary}
              />
              <br></br>
            </div>
            {errors.summary && <span>{errors.summary}</span>}
            
            <div>
            <br></br>
                <label htmlFor="healthScore">Health score</label>
                <input type="text" placeholder="Debe ser un numero entre 1 y 100" name="healthScore" value={form.healthScore} onChange={handleChange}/>
                <br></br>
            </div>
            {errors.healthScore && <span>{errors.healthScore}</span>}
           
            <div>
            <br></br>
                <label htmlFor="instructions">Instructions</label>
                
                <textarea
                name="instructions"
                placeholder="Breve descripcion de pasos"
                onChange={handleChange}
                value={form.instructions}
              />
              <br></br>
            </div>
            {errors.instructions && <span>{errors.instructions}</span>}
            
            <div>
            <br></br>
                <label htmlFor="image">image</label>
                <input type="text" name="image" placeholder="Puedes poner un texto tambien" value={form.image} onChange={handleChange} />
                <br></br>
            </div>
            {errors.image && <span>{errors.image}</span>}
            <br></br>
            <label>Choose a Diet</label>
            <br></br>
            <br></br>
            {diets.length ? (
                diets.map((element) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        value={element.id}
                        name={element.name}
                        onChange={handleSelect}
                      />
                      {element.name}
                    </label>
                  );
                })
              ) : (
                <div>waiting...</div>
              )}
            {errors.diets && <span>{errors.diets}</span>}
            <br></br>
            <br></br>
            <button  
            className={styles.btnSumit}
            type="submit">Submit Recipe</button>

        </form>


        </>

    )

};

export default Form;