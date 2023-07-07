import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Calc() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleClearClick = () => {
    setDisplayValue('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div>
      <input type="text" value={displayValue} readOnly />
      <div>
        <Button variant="primary" onClick={() => handleButtonClick('7')}>7</Button>
        <Button variant="primary" onClick={() => handleButtonClick('8')}>8</Button>
        <Button variant="primary" onClick={() => handleButtonClick('9')}>9</Button>
        <Button variant="success"onClick={() => handleButtonClick('+')}>+</Button>
      </div>
      <div>
        <Button  variant="primary"onClick={() => handleButtonClick('4')}>4</Button>
        <Button  variant="primary"onClick={() => handleButtonClick('5')}>5</Button>
        <Button  variant="primary"onClick={() => handleButtonClick('6')}>6</Button>
        <Button  variant="success"onClick={() => handleButtonClick('-')}>-</Button>
      </div>
      <div>
        <Button  variant="primary"onClick={() => handleButtonClick('1')}>1</Button>
        <Button  variant="primary"onClick={() => handleButtonClick('2')}>2</Button>
        <Button  variant="primary"onClick={() => handleButtonClick('3')}>3</Button>
        <Button  variant="success"onClick={() => handleButtonClick('*')}>*</Button>
      </div>
      <div>
        <Button  variant="primary"onClick={() => handleButtonClick('0')}>0</Button>
        <Button  variant="success"onClick={() => handleButtonClick('.')}>.</Button>
        <Button  variant="success"onClick={() => handleCalculate()}>=</Button>
        <Button  variant="success"onClick={() => handleButtonClick('/')}>/</Button>
      </div>
     
      <div>
        <Button variant="danger"onClick={() => handleClearClick()}>Clear</Button>
      </div>
    </div>
  );
}

export default Calc;
