import "./App.css";
import { Header } from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home"; // Ensure you have a Home component in the specified path
import { Shirt_Main } from "./Shirt/Shirt-Main";
import { Shirt_Main2 } from "./Cap/Shirt-Main";


export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camisa" element={<Shirt_Main />} />
          <Route path="/gorra" element={<Shirt_Main2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
