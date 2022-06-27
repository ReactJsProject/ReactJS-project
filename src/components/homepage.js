import React, {useState} from 'react'
import './homepage.css'
import NoUpload from './NoUpload';
import { PostRequest } from './PostRequest';
import Result from './Result';
var load=<NoUpload/>
function Homepage() {
  const [file, setFile] = useState();
  const [link, setLink] = useState();
  var [flag, setFlag] = useState(false);
    function handleChange(e) {
        console.log(e.target.value);
        setLink(e.target.value);
        if(flag){
          load=<PostRequest link={e.target.value}/>
        }
        else{
          load=<NoUpload/>
        }
          
        
    }
 
  
  return (
    <div className="section">
      <div className='container'>
      <div className="container-1">
        <h1 className="heading">Face Mask Detection</h1>
        <div className="text">Online Face Mask Detector - Free. Compatible with JPEG, JPG, PNG and more</div>
        <label>
        <div className="container-3">
            <a className="upload-button">
              <div className="buttontext" >Upload Image</div> 
                <div className="arrow-bubble"> 
                  <img src="https://assets-global.website-files.com/616e938268c8f02f94b2b53c/616e938268c8f03e4db2b839_Upload.svg" loading="lazy" alt=""></img>
                  <img src="https://assets-global.website-files.com/616e938268c8f02f94b2b53c/629de47db6e437795a105533_Icon.svg" loading="lazy"  alt="" className="livestreaming-condition"></img>
                </div> 
            </a>
            <input id="icon-button-file"
            type="url" onClick={() => setFlag(true)} onChange={handleChange} style={{ }} />
            {/* <button onClick={() => setFlag(true)} onChange={handleChange}> Submit</button> */}
           
            <div className="image">
              <img src={link} />
              {/* {console.log(link)} */}
            </div>
        </div>
        
        </label>
      </div>
      <div className="container-2">
        <img src={require('../../src/assets/facemask1.jpeg')}></img>
      </div>
      
    </div>
    
   <div>{load}</div>

    </div>
    
  )
}

export default Homepage