import { MenuL } from "./menuL/MenuL";
import { Scene } from "./Shirt/Scene";
import { MenuR } from "./menuR/MenuR";
import './Shirt-Main.css'

export const Pants_main = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <Scene/>
      <MenuR />
    </main>
  );
};
