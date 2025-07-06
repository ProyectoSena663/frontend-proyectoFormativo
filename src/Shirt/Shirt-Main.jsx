import { useState } from "react";
import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import { ModelDisplay } from "./ModelDisplay/Model_Display";
import "./Shirt-Main.css";

export const Shirt_Main = () => {
  const [tipoPrenda, setTipoPrenda] = useState("camiseta");
  const [color, setColor] = useState("#ffffff");
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [speed, setSpeed] = useState(0);

  return (
    <main className="Shirt_Main">
      <MenuL
        onTipoPrendaChange={setTipoPrenda}
        onColorChange={setColor}
        color={color}
        rotation={setRotation}
        isRotating={setIsRotating}
        speed={setSpeed}
      />
      <ModelDisplay
        tipoPrenda={tipoPrenda}
        color={color}
        rotation={rotation}
        isRotating={isRotating}
        speed={speed}
      />
      <MenuR />
    </main>
  );
};
