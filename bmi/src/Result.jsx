import React, { useState } from 'react';

function Result({mode, setMode, bmi, min, max, range, color, setShowResult}) {
  
  return (
    <div className='container'>
      <header className={mode?"header": "dark-header"}>
        <div className={mode?'back': "dark-back"} onClick={()=>{setShowResult(false) }}>
          <div></div>
        </div>
        <div className='darkmode'>
          <input type="checkbox" className="theme-checkbox" onClick={()=>setMode(!mode)}/>
        </div>
      </header>
      <div className={mode?"content":"dark-content"}>
        <h4>BMI</h4>
        <h1>{bmi}</h1>
        <h2 style={color}>{range}</h2>
        <p>You're Healthy weight range is between <br/> <span>{min}</span>kg and <span>{max}</span>kg</p>
      </div>
    </div>
  )
}

export default Result
