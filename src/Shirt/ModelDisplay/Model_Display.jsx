import { ShirtScene } from "../ShirtTypes/T_Shirt/ShirtEscene";
import { HoodieScene } from "../ShirtTypes/Hoodie/HoodieScene"; // Buso
import { JacketScene } from "../ShirtTypes/Jacket/JacketScene"; // Camibuso
import { ShirtLongSleeves } from "../ShirtTypes/Shirt_Long_Sleeves/LongShirtScene"; // Camisa

export const ModelDisplay = ({ tipoPrenda, color }) => {
  switch (tipoPrenda) {
    case "camiseta":
      return <ShirtScene color={color} />;
    case "camibuso":
      return <JacketScene color={color} />;
    case "camisa":
      return <ShirtLongSleeves color={color} />;
    case "buso":
      return <HoodieScene color={color} />;
    case "esqueleto":
      return <TankTopScene color={color} />;
    default:
      return (
        <div
          style={{ color: "white", textAlign: "center", paddingTop: "2rem" }}
        >
          Selecciona una prenda para mostrar su modelo
        </div>
      );
  }
};
