import "./App.css";
import { Header } from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home"; // Ensure you have a Home component in the specified path
import { Shirt_Main } from "./Shirt/Shirt-Main";
import { Cap_main } from "./Cap/Cap-Main";
import { Pants_main } from "./Pants/Shirt-Main";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camisa" element={<Shirt_Main />} />
          <Route path="/gorra" element={<Cap_main />} />
          <Route path="/pantalon" element={<Pants_main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
