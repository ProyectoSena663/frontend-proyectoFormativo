import { MenuL } from "./menuL/MenuL";
import { ShirtScene } from "./Shirt/ShirtEscene";
import { MenuR } from "./menuR/MenuR";
import './Shirt-Main.css'

export const Shirt_Main = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <ShirtScene />
      <MenuR />
    </main>
  );
};
