import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import "./Shirt-Main.css";
import { Scene } from "./Shirt/ShirtEscene";

export const Shirt_Main2 = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <Scene />
      <MenuR />
    </main>
  );
};
