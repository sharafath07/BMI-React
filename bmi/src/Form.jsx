import React, { useState, useRef, useEffect } from 'react';

function Form({height, setHeight, weight, setWeight, mode, setMode,bmi, setBmi, calculate, calculateRange, calculateMin, calculateMax}) {

  return (
    <div className={mode?"container":"dark-container"} >
        <header className={mode?"header":"dark-header"}>
            <div className={mode?"ring":"dark-ring"} onClick={()=>{window.location.reload();}}/>
            <div className='darkmode'>
                <input type="checkbox" className="theme-checkbox" onClick={()=>{setMode(!mode)}}/>
            </div>
        </header>
        <h1 className={mode?'h1':'dark-h1'}>BMI Calculator</h1>
        <div className={mode?"height-container":"dark-height-container"}>
            <div className="value">
                <h4>{height}</h4>
                <h6 className={mode?'h6':'dark-h6'}>CM</h6>
            </div>
            <input type="range" min="100" max="300" value={height} className={mode?"slider":"dark-slider"} onChange={(e)=>{
                setHeight(e.target.value)
            }}/>
            
        </div>
        <div className={mode?"weight-container":"dark-weight-container"}>
            <div className={mode?"arrow btn left":"arrow dark-btn left"} onClick={()=>{
                if(weight >= 11)
                    setWeight(weight-1)
            }}>
            </div>
            <div className={mode?"value":"dark-value"}>
                <h4>{weight}</h4>
                <h6 className={mode?'h6':'dark-h6'}>KG</h6>
            </div>
            <div className={mode?"arrow btn right":"arrow dark-btn right"} onClick={()=>{
                if(weight <= 649)
                    setWeight(weight+1)
            }}>
            </div>
        </div>
        <button className={mode?'calculate':'dark-calculate'} onClick={()=>{ calculate() }}>Calculate</button>
        
      
    </div>
  )
}

export default Form
