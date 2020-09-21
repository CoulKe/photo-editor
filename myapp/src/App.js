import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import { FilterProvider } from "./components/FilterContext";

function App() {
  return (
    <>
      <FilterProvider>
        <Filters />
      </FilterProvider>
    </>
  );
}

export default App;
