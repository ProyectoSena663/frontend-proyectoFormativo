import { MenuL } from "../menuL/MenuL";
import { MenuR } from "../menuR/MenuR";
import camiseta from "../assets/shirtpng.webp"
import "./Prototipo.css";

export const Prototipo = () => {
  return (
    <div className="Prototipo">
      <div className="camisa">
       <img src={ camiseta } alt="" />
      </div>
      <MenuR/>
      <MenuL/>
    </div>
  );
};

