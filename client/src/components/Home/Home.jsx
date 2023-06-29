import { useEffect } from "react";
import style from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state);

  useEffect(() => {
    recipes && dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className={style.divCards}>
      {recipes?.map(({ id, title, image, diets }) => {
        return (
          <Card key={id} id={id} title={title} image={image} diets={diets} />
        );
      })}
    </div>
  );
};
export default Home;
