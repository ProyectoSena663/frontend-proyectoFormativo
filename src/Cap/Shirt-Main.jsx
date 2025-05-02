import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import './Shirt-Main.css'
import { Model } from "./Shirt/Model";

export const Shirt_Main2 = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <Model />
      <MenuR />
    </main>
  );
};
