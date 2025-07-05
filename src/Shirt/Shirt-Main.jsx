import { useState } from "react";
import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import { ModelDisplay } from "./ModelDisplay/Model_Display";
import "./Shirt-Main.css";

export const Shirt_Main = () => {
  const [tipoPrenda, setTipoPrenda] = useState("camiseta");
  const [color, setColor] = useState("#ffffff");

  return (
    <main className="Shirt_Main">
      <MenuL
        onTipoPrendaChange={setTipoPrenda}
        onColorChange={setColor}
        color={color}
      />
      <ModelDisplay tipoPrenda={tipoPrenda} color={color} />
      <MenuR />
    </main>
  );
};
