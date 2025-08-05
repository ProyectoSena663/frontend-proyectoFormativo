import { createContext, useContext, useEffect, useState } from "react";

const OutfitContext = createContext();

export const OutfitProvider = ({ children }) => {
  const [colors, setColors] = useState({
    camisaPantalon: "white",
    gorra: "white",
  });

  useEffect(() => {
    const stored = sessionStorage.getItem("colorGorra");
    if (stored) setColors(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("colorGorra", JSON.stringify(colors));
  }, [colors]);

  return (
    <OutfitContext.Provider value={{ colors, setColors }}>
      {children}
    </OutfitContext.Provider>
  );
};

function useOutfit() {
  return useContext(OutfitContext);
}

export { useOutfit };
