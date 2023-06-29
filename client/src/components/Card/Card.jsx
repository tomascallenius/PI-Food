import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.divCard}>
      <div>
        <p className={style.title}>{props.title}</p>
        <img src={props.image} alt={props.title} className={style.img} />
        <p>Diets included</p>
      </div>
      <div className={style.diets}>
        {props.diets?.map((diet) => {
          return <ul>{diet}</ul>;
        })}
      </div>
      <NavLink to={`/recipeDetail/${props.id}`}>
        <button className={style.moreInfoButton}>Information</button>
      </NavLink>
    </div>
  );
};

export default Card;
