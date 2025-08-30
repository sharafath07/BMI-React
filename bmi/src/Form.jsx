import React from 'react'

function Form() {
  return (
    <div className='container'>
        <header>
            <div className='home'>home</div>
            <div className='darkmode'>
                <input type="checkbox" class="theme-checkbox"/>
            </div>
        </header>
        <h1>BMI Calculator</h1>
        <div className="height-container">
            <h4>150</h4>
            <h6>CM</h6>

        </div>
        <div className="weight-container">
            <h4>50</h4>
            <h6>KG</h6>

        </div>
        <button className='calculate'>Calculate</button>
        
      
    </div>
  )
}

export default Form
