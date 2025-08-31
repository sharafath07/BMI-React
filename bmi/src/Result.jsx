import React from 'react';

function Result() {
  return (
    <div className='container'>
      <header>
        <div class="back" onClick={()=>{window.location.reload();}}>
          <div></div>
        </div>
        <div className='darkmode'>
          <input type="checkbox" class="theme-checkbox"/>
        </div>
      </header>
      <div className="content">
        <h4>BMI</h4>
        <h1>24</h1>
        <h2>NORMAL</h2>
        <p>You're Healthy weight range is<br/> from <span>50</span>kg to <span>60</span>kg</p>
      </div>
    </div>
  )
}

export default Result
