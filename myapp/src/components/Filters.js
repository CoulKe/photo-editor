import React, { useState } from "react";

function Filters() {
  let [blur, setBlur] = useState(() => 0);
  let [brightness, setBrightness] = useState(() => 100);
  let [contrast, setContrast] = useState(() => 100);
  let [grayscale, setGrayscale] = useState(0);
  let [hue, setHue] = useState(0);
  let [invert, setInvert] = useState(0);
  let [opacity, setOpacity] = useState(100);
  let [saturate, setSaturate] = useState(100);
  let [sepia, setSepia] = useState(0);

  function handleMenu(event) {}
  function handleClick(event) {
    console.log(blur);
  }
  function handleReset() {
    setBlur((blur = 0));
    setBrightness((brightness = 100));
    setContrast((contrast = 100));
    setGrayscale((grayscale = 0));
    setHue((hue = 0));
    setInvert((invert = 0));
    setOpacity((opacity = 100));
    setSaturate((saturate = 100));
    setSepia((sepia = 0));
  }
  return (
    <div id="myapp">
      <p id="menu" onClick={handleMenu}>
        Menu
      </p>
      <div id="filters">
        <span className="filter">
          <label>Blur</label>
          <input
            id="blur"
            name="blur"
            type="range"
            min="0"
            max="200"
            value={blur}
            onChange={function (e) {
              setBlur((blur = e.target.value));
              console.log(blur);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>Brightness</label>
          <input
            id="brightness"
            name="brightness"
            type="range"
            min="0"
            max="200"
            value={brightness}
            onChange={function (e) {
              setBrightness((brightness = e.target.value));
              console.log(brightness);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>Contrast</label>
          <input
            id="contrast"
            name="contrast"
            type="range"
            min="0"
            max="200"
            value={contrast}
            onChange={function (e) {
              setContrast((contrast = e.target.value));
              console.log(contrast);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>grayscale</label>
          <input
            id="grayscale"
            name="grayscale"
            type="range"
            min="0"
            max="200"
            value={grayscale}
            onChange={function (e) {
              setGrayscale((grayscale = e.target.value));
              console.log(grayscale);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>hue-rotate</label>
          <input
            id="hue"
            name="hue"
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={function (e) {
              setHue((hue = e.target.value));
              console.log(hue);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>invert</label>
          <input
            id="invert"
            name="invert"
            type="range"
            min="0"
            max="200"
            value={invert}
            onChange={function (e) {
              setInvert((invert = e.target.value));
              console.log(invert);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>opacity</label>
          <input
            id="opacity"
            name="opacity"
            type="range"
            min="0"
            max="200"
            value={opacity}
            onChange={function (e) {
              setOpacity((opacity = e.target.value));
              console.log(opacity);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>saturate</label>
          <input
            id="saturate"
            name="saturate"
            type="range"
            min="0"
            max="200"
            value={saturate}
            onChange={function (e) {
              setSaturate((saturate = e.target.value));
              console.log(saturate);
            }}
          ></input>
        </span>
        <span className="filter">
          <label>sepia</label>
          <input
            id="sepia"
            name="sepia"
            type="range"
            min="0"
            max="200"
            value={sepia}
            onChange={function (e) {
              setSepia((sepia = e.target.value));
              console.log(sepia);
            }}
          ></input>
        </span>
        <br />
        <button onClick={handleReset}>Reset</button> <br />
        <button onClick={handleClick}>Random</button>
        <div id="preview">
          <p>Upload image in order to preview </p>
          <input type="file" name="image-file" id="upload" />
        </div>
      </div>
    </div>
  );
}
export default Filters;
