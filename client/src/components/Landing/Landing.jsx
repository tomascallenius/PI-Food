import { NavLink } from "react-router-dom";
import image from "../../img/noWayHome.png";
import image2 from "../../img/welcome-alfombra.png";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={style.capaFondo}>
      <img src={image} alt="noWayHomeLogo" />
      <div className={style.container}>
        <div className={style.containerLeft}>
          <h1 className={style.text}>Recipes and Diets</h1>
          <h3 className={style.text}>
            Tired of always eating the same thing? Make your meals something
            special.
            <br />
            This is the way.
          </h3>
        </div>
        <div className={style.containerRight}>
          <NavLink to="/home">
            <p className={style.button}>Come In!</p>
          </NavLink>
          <img src={image2} alt="welcome" className={style.imgWelcome} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
