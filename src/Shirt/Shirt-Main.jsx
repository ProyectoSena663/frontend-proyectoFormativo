import { MenuL } from "./menuL/MenuL";
import { ShirtScene } from "./ShirtTypes/T_Shirt/ShirtEscene";
import { JacketScene } from "./ShirtTypes/Jacket/JacketScene";
import { HoodieScene } from "./ShirtTypes/Hoodie/HoodieScene";
import { ShirtLongSleeves } from "./ShirtTypes/Shirt_Long_Sleeves/LongShirtScene";
import { MenuR } from "./menuR/MenuR";
import "./Shirt-Main.css";

export const Shirt_Main = () => {
  return (
    <main className="Shirt_Main">
      <MenuL />
      <ShirtLongSleeves />
      <MenuR />
    </main>
  );
};
