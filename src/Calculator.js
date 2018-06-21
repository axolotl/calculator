import React, { Component } from 'react';

// import styles
import CalcWrapper from './styles/CalcWrapper';
import Row from './styles/Row';
import Key from './Key';

const test = {
  name: '+',
  method: () => {
    console.log('hello test')
  }
}

const keys = [
  ['(', ')', '%', 'CE'],
  [7, 8, 9, '÷'],
  [4, 5, 6, 'x'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+'],
];

const Calculator = ({ inputkey, clearInput, equals }) => (
  <div>
    <CalcWrapper>
      {keys.map((row, i) => (
        <Row key={i}>
          {row.map((col, j) => {
            const key = `row${i}col${j}`;
            let onClick;
            switch (col) {
              case 'CE': 
                onClick = () => clearInput();
                break;
              case '=':
                onClick = () => equals();
                break;
              default: 
                onClick = () => inputkey(col);
            }

            return (
              <Key onClick={onClick} key={key}>
                {col}
              </Key>
            );
          })}
        </Row>
      ))}
    </CalcWrapper>
  </div>
);

export default Calculator;
