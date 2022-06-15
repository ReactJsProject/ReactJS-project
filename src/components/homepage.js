import React, {useState} from 'react'
import './homepage.css'
function Homepage() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    
  return (
    <div className="section">
      <div className='container'>
      <div className="container-1">
        <h1 className="heading">Face Mask Detection</h1>
        <div className="text">Online Face Mask Detector - Free. Compatible with JPEG, JPG, PNG and more</div>
        <label>
        <input accept="image/*" id="icon-button-file"
        type="file" onChange={handleChange} style={{ display: 'none'}} />
        <a className="upload-button">
           <div className="buttontext" >Upload Image</div> 
          <div className="arrow-bubble"> 
            <img src="https://assets-global.website-files.com/616e938268c8f02f94b2b53c/616e938268c8f03e4db2b839_Upload.svg" loading="lazy" alt=""></img>
            <img src="https://assets-global.website-files.com/616e938268c8f02f94b2b53c/629de47db6e437795a105533_Icon.svg" loading="lazy"  alt="" className="livestreaming-condition"></img>
            
  
    
           </div> 
        </a>
        </label>
      </div>
      <div className="container-2">
      
            <img src={file} />
        <img src={require('../../src/assets/facemask1.jpeg')}></img>
      </div>
    </div>

    </div>
    
  )
}

export default Homepage