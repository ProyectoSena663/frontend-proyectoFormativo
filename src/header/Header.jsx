import React from "react";
import "./Header.css";
import { Sun } from "lucide-react";

export const Header = () => {
  return (
    <div className="Header">
      <div className="cabecera">
        <div className="circulo"></div>
        <div className="loader">
          <h2 className="word-container group-1">
            <span className="word">Craft</span>
            <span className="word">Shape</span>
            <span className="word">Build</span>
            <span className="word">Create</span>
          </h2>

          <h2 className="word-container group-2">
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
            <span className="word your">Your</span>
          </h2>

          <h2 className="word-container group-3">
            <span className="word">Style</span>
            <span className="word">Vibe</span>
            <span className="word">Essence</span>
            <span className="word">Image</span>
          </h2>
        </div>{" "}
      </div>
      <div className="divv">
        <Sun />
      </div>
    </div>
  );
};
