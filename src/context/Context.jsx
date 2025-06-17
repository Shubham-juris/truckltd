import React, { createContext, useContext } from "react";
import img from "../assets/about/worker.avif";
const Context = createContext();

const imgData = {
  name: "Valeria Thomas",
  image: img,
};

export const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={imgData}>
      {children}
    </Context.Provider>
  );
};

export const usedata = () => useContext(Context);
