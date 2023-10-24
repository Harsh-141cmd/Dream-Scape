import './App.css';
import { useState } from 'react';
import fetchImagesArr from './fetchImageData';
function App() {

  //Get the Input
  const [searchItem, setSearchItem] = useState("")
  //Styles our application for loader
  const [isLoadingVisible, setisLoadingVisible] = useState(false);
  const [loading, setloading] = useState(true);
  //Stores the result of the images
  const [imagesArr, setImagesArr] = useState([]);
  
  const handleInput = async () => {
    setisLoadingVisible(true);
    setloading(true);
    console.log('Getting the Data: and making the request', searchItem);
    const arr = await fetchImagesArr(searchItem);
    setloading(false);
    setisLoadingVisible(false);

    setImagesArr(arr);
  }

  const styleObject = {display : isLoadingVisible === true ? "block" : "none" };

  return (
    <>
      <h1>Image Generator</h1>
      <div className="container">
        <div className="input-wrapper">
          <input type='text' id='text-input'value={searchItem}
          onChange = {(e) => setSearchItem(e.target.value)}
          />
          <button id='generate-button' onClick={handleInput}> 
            Generate</button>
        </div>
      <div className="image-grid">
        <div className="placeholder">
          {loading === true ? <div style={styleObject}>Loading...</div>: <img src ={imagesArr[0].url}></img>}
        </div>
  
        <div className="placeholder">
          {loading === true ? <div style={styleObject}>Loading...</div>: <img src ={imagesArr[1].url}></img>}
        </div>
  
        <div className="placeholder">
          {loading === true ? <div style={styleObject}>Loading...</div>: <img src ={imagesArr[2].url}></img>}
        </div>
  
        <div className="placeholder">
          {loading === true ? <div style={styleObject}>Loading...</div>: <img src ={imagesArr[3].url}></img>}
        </div>
  
      </div>
      </div>
    </>
  )
}

export default App