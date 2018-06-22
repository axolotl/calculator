import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

// import components
import Calculator from './Calculator';
import Display from './Display';
import Warn from './Warn';

// import styles
import PageWrapper from './styles/PageWrapper';
import CalcWrapper from './styles/CalcWrapper';

// import utils
import calcSolution from './utils/calcSolution';
import isOperator from './utils/isOperator';
import multipleLeadingZeros from './utils/multipleLeadingZeros';

injectGlobal`
  html, body, #root {
    margin: 0;
    height: 100%
  }
`;

class App extends Component {
  // as long as solution is empty, display will show input
  // once there is a solution, it switches to show that
  // if a solution is active and new keys are entered
  // it erases the solution and begins again

  state = {
    input: '',
    solution: '',
    warnings: []
  };

  inputkey = key => {
    const { input, solution } = this.state;

    // if no solution, simply add key to input
    if (solution.length === 0) {
      // if last key was operator, replace with new key
      if (isOperator(input[input.length - 1]) && isOperator(key)) {
        this.setState({ input: input.slice(0, input.length - 1).concat(key) });
      } else if (input[input.length - 1] === '.' && key === '.') {
        this.throwWarning('Cannot add two decimal points to the same number');
      } else if (
        key === 0 &&
        input.length > 0 &&
        input[input.length - 1] === '0' &&
        multipleLeadingZeros(input)
      ) {
        this.throwWarning('Cannot use mutliple leading zeros');
      } else {
        this.setState({ input: input.concat(key) });
      }
    }

    // if there is a solution displayed and operator is pressed, pipe solution into first value of input
    else if (isOperator(key)) {
      this.setState({ input: solution.concat(key), solution: '' });
    }

    // if there is a solution displayed and key is pressed, add key input and wipe solution
    else {
      this.setState({ input: key.toString(), solution: '' });
    }
  };

  clearInput = () => {
    this.setState({ input: '', solution: '' });
  };

  equals = () => {
    try {
      const solution = calcSolution(this.state.input).toString();
      this.setState({ solution });
    } catch (error) {
      this.throwWarning('Impossible to evaluate input. Press CE to try again.');
    }
  };

  throwWarning = warning => {
    this.setState({
      warnings: this.state.warnings.concat(warning)
    });
    setTimeout(
      () => this.setState({ warnings: this.state.warnings.slice(1) }),
      2000
    );
  };

  render() {
    const { input, solution, warnings } = this.state;
    const { inputkey, clearInput, equals } = this;
    const display = solution.length === 0 ? input : solution;

    return (
      <PageWrapper>
        <CalcWrapper>
          <Display content={display} />
          <Calculator
            inputkey={inputkey}
            clearInput={clearInput}
            equals={equals}
          />

          {warnings.length > 0 &&
            warnings.map((warning, i) => <Warn key={i} warning={warning} />)}
        </CalcWrapper>
      </PageWrapper>
    );
  }
}

export default App;
