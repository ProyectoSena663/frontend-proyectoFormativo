import { MenuL } from "./menuL/MenuL";
import { MenuR } from "./menuR/MenuR";
import { OutfitProvider } from "../outfit/logicaOutfit/OutfitProvider";
import "./Cap-main.css";
import { Scene } from "./Cap-3D/Cap-Scene";

export const Cap_main = () => {
  return (
    <main className="Cap_Main">
      <OutfitProvider>
        <MenuL />
      </OutfitProvider>
      <Scene />
      <MenuR />
    </main>
  );
};
