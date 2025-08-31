import React, {useState} from 'react';
import right_black from './assets/right_black.png';
import left_black from './assets/left_black.png';


function Form() {
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(50)

    function calculate(){
        const BMI = weight/((height/100)*(height/100))
        
    }

  return (
    <div className='container'>
        <header>
            <div class="ring" onClick={()=>{window.location.reload();}}/>
            <div className='darkmode'>
                <input type="checkbox" class="theme-checkbox"/>
            </div>
        </header>
        <h1>BMI Calculator</h1>
        <div className="height-container">
            <div className="value">
                <h4>{height}</h4>
                <h6>CM</h6>
            </div>
            <input type="range" min="100" max="300" value={height} class="slider" onChange={(e)=>{
                setHeight(e.target.value)
            }}/>
            
        </div>
        <div className="weight-container">
            <div class="arrow left" onClick={()=>{
                if(weight >= 2)
                    setWeight(weight-1)
            }}>
                <img src={left_black} />
            </div>
            <div className="value">
                <h4>{weight}</h4>
                <h6>KG</h6>
            </div>
            <div class="arrow right" onClick={()=>{
                if(weight <= 649)
                    setWeight(weight+1)
            }}>
                <img src={right_black} />
            </div>
        </div>
        <button className='calculate'>Calculate</button>
        
      
    </div>
  )
}

export default Form
