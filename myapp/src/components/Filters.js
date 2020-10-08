import React, { useState } from "react";

function Filters() {
  let [previewText, setPreviewText] = useState(false);
  let [img, setImg] = useState(false);
  // Filters
  let [blur, setBlur] = useState(() => 0);
  let [brightness, setBrightness] = useState(() => 100);
  let [contrast, setContrast] = useState(() => 100);
  let [grayscale, setGrayscale] = useState(() => 0);
  let [hue, setHue] = useState(() => 0);
  let [invert, setInvert] = useState(() => 0);
  let [opacity, setOpacity] = useState(() => 100);
  let [saturate, setSaturate] = useState(() => 100);
  let [sepia, setSepia] = useState(() => 0);

  function showMenu(e) {
    document.querySelector('#filters').style = 'transform: translateX(20%);';
  }
  function hideMenu(e) {
    e.target.closest('#filters').style = 'transform: translateX(1000px);';
  }
  function clickInput() {
    let inputElement = document.querySelector("#upload");
    inputElement.click();
  }
  function clickUpload() {
    let inputElement = document.querySelector("#upload");
    let image = document.querySelector("img");
    const clickFile = inputElement.files[0];
    if (clickFile) {
      setPreviewText(() => (previewText = true));
      setImg(() => (img = true));
      const reader = new FileReader();
      reader.readAsDataURL(clickFile);
      reader.onloadend = function () {
        let src = this.result;
        image.src = src;
        image.alt = clickFile.name;
      };
    }
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    let image = document.querySelector("img");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      let src = this.result;
      image.src = src;
      image.alt = file.name;
      setPreviewText(() => (previewText = true));
      setImg(() => (img = true));
    };
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
      <p id="menu" onClick={showMenu}>
        Menu
      </p>
      <div id="filters">
        <button id="cancel" onClick={hideMenu}>&times;</button>
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
            max="100"
            value={opacity}
            onChange={function (e) {
              setOpacity((opacity = e.target.value));
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
            }}
          ></input>
        </span>
      </div>
      <div className = "previewWrapper">
      <div
        id="preview"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={clickInput}
      >
        <img
          alt=""
          id="uploadedImage"
          className={img ? "" : "hideImage"}
          style={{
            filter: `grayscale(${grayscale}%) blur(${blur}px)
             brightness(${brightness}%) contrast(${contrast}%) 
             hue-rotate(${hue}deg) opacity(${opacity}%) 
             invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`,
          }}
        />
        <p className={previewText ? "previewText" : ""} id = "previewTextPosition">
          Upload image in order to preview
          </p>
        <input
          type="file"
          name="image-file"
          id="upload"
          onChange={clickUpload}
        />
        </div>
        <button onClick={handleReset} id = "reset">Reset</button> <br />
      </div>
    </div>

  );
}
export default Filters;
