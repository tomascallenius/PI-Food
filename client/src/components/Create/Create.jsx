import { useState } from "react";
import style from "./Create.module.css";
import { useDispatch } from "react-redux";
import { postRecipe } from "../../redux/actions";

const Create = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    image: "",
    healthScore: "",
    summary: "",
    steps: "",
    variasRecetas: [],
  });

  const handleForm = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleClick = (event, form) => {
    console.log(form);
    event.preventDefault();
    dispatch(postRecipe(form));
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Create da Recipe</h1>
        <img
          src="https://ciberprotector.com/wp-content/uploads/2019/05/informacion-ciberprotector.png"
          alt=""
          className={style.image}
        />
      </div>
      <div>
        <form action="" type="submit" className={style.form}>
          <label htmlFor="" name="title">
            Recipe Title
          </label>
          <input type="text" onChange={handleForm} name="title" />

          <label htmlFor="" name="summary">
            Summary
          </label>
          <input type="text" onChange={handleForm} name="summary" />

          <label htmlFor="" name="healthScore">
            Punctuation
          </label>
          <input type="text" onChange={handleForm} name="healthScore" />

          <label htmlFor="" name="steps">
            Step by step
          </label>
          <input type="text" onChange={handleForm} name="steps" />

          <label htmlFor="" name="image">
            Image URL
          </label>
          <input type="text" onChange={handleForm} name="image" />

          <label htmlFor="" name="variasDietas">
            Related diets
          </label>
          <input type="text" onChange={handleForm} name="variasDietas" />

          <button type="submit" onClick={handleClick}>
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;

// Nombre.
// Resumen del plato.
// Nivel de comida saludable (health score).
// Paso a paso.
// Imagen.
// Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
// Botón para crear la receta.
