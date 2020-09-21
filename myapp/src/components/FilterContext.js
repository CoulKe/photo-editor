import React, {useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [filters, setFilters] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
  })

  return(
      <FilterContext.Provider value ={[filters, setFilters]}>
          {props.children}
      </FilterContext.Provider>
  )
};
