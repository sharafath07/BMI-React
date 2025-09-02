import React from 'react';
import Form from './Form';
import Result from './Result';
import './white.css';
import './dark.css';
import { useState, useEffect} from 'react';

function App() {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [mode, setMode] = useState(true);
  const [bmi, setBmi] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [range, setRange] = useState();
  const [color, setColor] = useState();
  const [showResult, setShowResult] = useState(false);

  function calculate(){
    let bmi = weight/((height/100)*(height/100));
    setBmi(bmi.toFixed(1))
    setShowResult(true)
  }
  
  useEffect(()=>{
    if (bmi === 0) {
      return;
    }
    calculateRange()
    calculateMin()
    calculateMax()
  },[bmi])

  function calculateRange(){
    if (bmi < 18.5) {
      setRange('UNDERWEIGHT');
      setColor({color: "#2196F3"})
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setRange('NORMAL');
      setColor({color: "#4CAF50"})      
    } else if (bmi >= 25 && bmi <= 29.9) {
      setRange('OVERWEIGHT');
      setColor({color: "#FFEB3B"})      
    } else if (bmi >= 30 && bmi <= 34.9) {
      setRange('OBESITY (Class |)');
      setColor({color: "#FF9800"})      
    } else if (bmi >= 35 && bmi <= 39.9) {
      setRange('OBESITY (Class ||)');
      setColor({color: "#FF9800"})      
    } else if (bmi >= 40) {
      setRange('OBESITY (Class |||)');
      setColor({color: "#F44336"})
    }
  }
  function calculateMin(){
    for(let i = 10; i<=700;i++){
      let bmi = 0;
      bmi = i/((height/100)*(height/100))
      if (bmi >= 18) {
        setMin(i)
        break;
      }
    }
  }
  function calculateMax(){
    for(let i = 700; i>=10;i--){
      let bmi = 0;
      bmi = i/((height/100)*(height/100))
      if (bmi <= 25) {
        setMax(i)
        break;
      }
    }
  }

  return (
    <div>
      {
        showResult? (
          <Result mode={mode} setMode={setMode} bmi={bmi} min={min} max={max} range={range} color={color} setShowResult={setShowResult} />
        ):(
          <Form height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} mode={mode} setMode={setMode} bmi={bmi} setBmi={setBmi} calculate={calculate} calculateRange={calculateRange} calculateMin={calculateMin} calculateMax={calculateMax} setShowResult={setShowResult} />
        )
      }
    </div>
  )
}

export default App
