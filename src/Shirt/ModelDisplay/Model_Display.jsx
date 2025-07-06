import { ShirtScene } from "../ShirtTypes/T_Shirt/ShirtEscene";
import { HoodieScene } from "../ShirtTypes/Hoodie/HoodieScene"; // Buso
import { JacketScene } from "../ShirtTypes/Jacket/JacketScene"; // Camibuso
import { ShirtLongSleeves } from "../ShirtTypes/Shirt_Long_Sleeves/LongShirtScene"; // Camisa

export const ModelDisplay = ({
  tipoPrenda,
  color,
  rotation,
  isRotating,
  speed,
}) => {
  switch (tipoPrenda) {
    case "camiseta":
      return <ShirtScene color={color} />;
    case "camibuso":
      return (
        <JacketScene
          color={color}
          rotation={rotation}
          isRotating={isRotating}
          speed={speed}
        />
      );
    case "camisa":
      return (
        <ShirtLongSleeves
          color={color}
          rotation={rotation}
          isRotating={isRotating}
          speed={speed}
        />
      );
    case "buso":
      return (
        <HoodieScene
          color={color}
          rotation={rotation}
          isRotating={isRotating}
          speed={speed}
        />
      );
    case "esqueleto":
      return (
        <TankTopScene
          color={color}
          rotation={rotation}
          isRotating={isRotating}
          speed={speed}
        />
      );
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
