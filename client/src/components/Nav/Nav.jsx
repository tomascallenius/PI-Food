import { NavLink, useLocation } from "react-router-dom";
import image from "../../img/noWayHome.png";
import Search from "../Search/Search.jsx";
import style from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  return (
    <div className={style.containerNav}>
      <NavLink to="/home">
        <img src={image} alt="toHome" className={style.homeImg} />
      </NavLink>
      <NavLink to="/createrecipe">
        {location.pathname !== "/createRecipe" && (
          <button className={style.buttonCreate}>Create Recipe</button>
        )}
      </NavLink>
      <Search />
    </div>
  );
};

export default Nav;
