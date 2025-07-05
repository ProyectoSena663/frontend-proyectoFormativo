import "./Outfit.css";
import { OufitEcene } from "./logicaOutfit/OufitEcene"; // Importa el componente de la escena del outfit

export const Outfit = () => {
  return (
    <div className="contenedorOufit">
      <OufitEcene />
    </div>
  );
};
