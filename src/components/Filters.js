import React, { useState } from "react";
import menu from "../images/hamburger.png";

let realWidth = '';
let realHeight = '';
function Filters() {
  //previewText class doesn't exist
  let [previewText, setPreviewText] = useState(false);
  let [img, setImg] = useState(false);
  // Filters with their default values
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
    let image = document.querySelector("#uploadedImage");
    //Select only the first image
    const clickFile = inputElement.files[0];
    //If there's an uploaded image, display the image
    if (clickFile) {
      //If there's an image, add previewText class which has display: none;
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
    //select only the first image
    let file = e.dataTransfer.files[0];
    let image = document.querySelector("#uploadedImage");

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
  /*
  * Download and set image name.
  * @param dataSrc 
  */
  function downloadImage(dataSrc, filename = 'untitled.jpeg') {
    let a = document.querySelector('#download_link')
    a.href = dataSrc
    a.download = filename
    a.click();
}
  function handleDownload() {
    if (!img) {
      alert('Please upload image to continue');
    }
    else{
      let myCanvas = document.querySelector('canvas')
      let image = document.querySelector('#uploadedImage')
      let ctx ='';

      //real image dimensions
      realWidth = image.naturalWidth;
      realHeight = image.naturalHeight;
      //canvas dimensions
      myCanvas.setAttribute('width', realWidth)
      myCanvas.setAttribute('height', realHeight)
      //Draw image
      ctx =  myCanvas.getContext('2d'); 

      ctx.filter = `grayscale(${grayscale}%) blur(${blur}px)
    brightness(${brightness}%) contrast(${contrast}%) 
    hue-rotate(${hue}deg) opacity(${opacity}%) 
    invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`;

    ctx.drawImage(image, 0, 0, myCanvas.width, myCanvas.height);

      let dataSrc = myCanvas.toDataURL('image/png')
      let name = image.alt;
      downloadImage(dataSrc, name);
    }
  }
  /*
  *Reset filters to their default values
  */
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
      <img src={menu} alt="menu" id="menu" onClick={showMenu}/>
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
          src=""
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
        <a id="download_link" href="/" hidden download >Download</a>
        <canvas id="cnvs" className="canvas"></canvas>
        <div id="buttons">
        <button onClick={handleDownload} id = "download">Download</button>
        <button onClick={handleReset} id = "reset">Reset</button>
        </div>
      </div>
    </div>

  );
}
export default Filters;