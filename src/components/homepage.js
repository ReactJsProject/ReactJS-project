import React, {useEffect, useState} from 'react'
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
        <label>
          <form >
        <div className="container-3">

          <div className='row'>
            <h2 className='upload-text'>Image URL</h2>
            <input id="icon-button-file"
            type="url" onClick={() => setFlag(true)} onChange={handleChange} style={{ }} />
          </div>         
            {/* <button onClick={() => setFlag(true)} onChange={handleChange}> Submit</button> */}
            <div>{load}</div>
            <div className="image">
              <img src={link} />
              {/* {console.log(link)} */}

           
            </div>
        </div>
        </form>
        
        </label>
      </div>
      <div className="container-2">
        <img src={require('../../src/assets/facemask1.jpeg')}></img>
      </div>
      
    </div>
    
  

    </div>
    
  )
}

export default Homepage