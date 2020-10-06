import React, { useContext, useState } from "react";
import { FilterContext } from "./FilterContext";

function Filters() {
  let [filters, setFilters] = useContext(FilterContext);
  let newFilters = { ...filters };
  let [img, setImg] = useState();
  let blurField = document.querySelector("#blur");
  let brightField = document.querySelector("#brightness");
  let contrastField = document.querySelector("#contrast");
  let grayField = document.querySelector("#grayscale");
  let hueField = document.querySelector("#hue");
  let invertField = document.querySelector("#invert");
  let opacityField = document.querySelector("#opacity");
  let saturateField = document.querySelector("#saturate");
  let sepiaField = document.querySelector("#sepia");

  function handleMenu(event){
    
  }
  function handleClick(event) {
    newFilters = { ...filters };

    blurField.value = newFilters.blur;
    brightField.value = newFilters.brightness;
    contrastField.value = newFilters.contrast;
    grayField.value = newFilters.grayscale;
    hueField.value = newFilters.hue;
    invertField.value = newFilters.invert;
    opacityField.value = newFilters.opacity;
    saturateField.value = newFilters.saturate;
    sepiaField.value = newFilters.sepia;
  }
  return (
    <div id="myapp">
    <p id = "menu" onClick = {handleMenu}>Menu</p>
      <div id="filters">
        <p className="filter">
          <label>Blur</label>
          <input
            id="blur"
            name="blur"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.blur}
            onChange={function (event) {
              setFilters((filters = { ...filters, blur: event.target.value }));
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>Brightness</label>
          <input
            id="brightness"
            name="brightness"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.brightness}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, brightness: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) brightness(${filters.brightness}%) blur(${filters.blur}px)
            contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );

              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>Contrast</label>
          <input
            id="contrast"
            name="contrast"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.contrast}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, contrast: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>grayscale</label>
          <input
            id="grayscale"
            name="grayscale"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.contrast}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, grayscale: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>hue-rotate</label>
          <input
            id="hue"
            name="hue"
            type="range"
            min="0"
            max="360"
            defaultValue={filters["hue-rotate"]}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, "hue-rotate": event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>invert</label>
          <input
            id="invert"
            name="invert"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.invert}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, invert: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>opacity</label>
          <input
            id="opacity"
            name="opacity"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.opacity}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, opacity: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>saturate</label>
          <input
            id="saturate"
            name="saturate"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.saturate}
            onChange={function (event) {
              setFilters(
                (filters = { ...filters, saturate: event.target.value })
              );
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>
        </p>
        <p className="filter">
          <label>sepia</label>
          <input
            id="sepia"
            name="sepia"
            type="range"
            min="0"
            max="200"
            defaultValue={filters.sepia}
            onChange={function (event) {
              setFilters((filters = { ...filters, sepia: event.target.value }));
              setImg(
                (img = `grayscale(${filters.grayscale}%) blur(${filters.blur}px)
             brightness(${filters.brightness}%) contrast(${filters.contrast}%) 
             hue-rotate(${filters["hue-rotate"]}deg) opacity(${filters.opacity}%) 
             invert(${filters.invert}%) saturate(${filters.saturate}%) sepia(${filters.sepia}%)`)
              );
              console.log(img);
            }}
          ></input>{" "}
          <br />
          <button onClick={handleClick}>Reset</button> <br />
          <button onClick={handleClick}>Random</button>
        </p>
      </div>
      <div id="preview">
        <p>Upload image in order to preview </p>
        <input type="file" name="image-file" id="upload" />
      </div>
    </div>
  );
}

export default Filters;
