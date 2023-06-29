import style from "./Search.module.css";
import { useDispatch } from "react-redux";
import { getAllRecipes, getRecipesByName } from "../../redux/actions";
import { useState } from "react";

const Search = () => {
  // const [name, setName] = useState("");
  // const dispatch = useDispatch();

  // const handleInput = (event) => {
  //   setName(event.target.value);
  // };

  // const handleClick = () => {
  //   dispatch(getRecipesByTitle(name));
  //   setName("");
  //   console.log(name);
  // };
  const [input, setInput] = useState(""); //el estado input se inicializa con una cadena vacia
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const { value } = event.target;
    if (value) {
      dispatch(getRecipesByName(value));
      // props.setPage(1);
    } else {
      dispatch(getAllRecipes());
    }
  };
  const handleInput = (event) => {
    if (!event.target.value) {
      dispatch(getAllRecipes());
      setInput("");
    } else {
      setInput(event.target.value);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  };

  return (
    <div className={style.containerSearch}>
      <input
        type="text"
        placeholder=" Ej: mushroom..."
        className={style.searchInPut}
        value={input}
        onChange={handleInput}
      />
      <button
        type="submit"
        value={input}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        className={style.buttonSearch}
      >
        search
      </button>
    </div>
  );
};

export default Search;
