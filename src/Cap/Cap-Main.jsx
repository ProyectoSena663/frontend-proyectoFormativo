import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import "./Cap-main.css";
import { Scene } from "./Cap-3D/Cap-Scene";

export const Cap_main = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <Scene />
      <MenuR />
    </main>
  );
};
