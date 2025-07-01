import { MenuL } from "./menuL/MenuL";
import { Scene } from "./Pants-3D/Scene";
import { MenuR } from "./menuR/MenuR";
import './Pants-Main.css'

export const Pants_main = () => {
  return (
    <main className="Pants_Main">
      <MenuL />
      <Scene/>
      <MenuR />
    </main>
  );
};
