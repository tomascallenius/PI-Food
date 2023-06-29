import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getlRecipesById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getlRecipesById(id));
  }, [dispatch]);
  console.log(detail.diets);
  return (
    <div className={style.divCards}>
      <div>
        <h1>{detail.title}</h1>
        <p>{detail.summary}</p>
      </div>
      <div>
        <img src={detail.image} alt={detail.title} className={style.img} />
        <p>Health score: {detail.healthScore}</p>
        <p>{detail.intructions}</p>
        <h3>Dietas asociadas:</h3>
        {detail.diets?.map((diet) => (
          <ol>{diet}</ol>
        ))}
      </div>
    </div>
  );
};

export default Detail;
