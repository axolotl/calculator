import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

// import styles and components
import Calculator from './Calculator';
import Display from './Display';
import PageWrapper from './styles/PageWrapper';
import CalcWrapper from './styles/CalcWrapper';

// import utils
import calcSolution from './utils/calcSolution';

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
    solution: ''
  };

  inputkey = key => {
    this.state.solution.length === 0
      ? this.setState({ input: this.state.input.concat(key) })
      : this.setState({ input: key.toString(), solution: '' });
  };

  clearInput = () => {
    this.setState({ input: '', solution: '' });
  };

  equals = () => {
    this.setState({
      solution: calcSolution(this.state.input).toString()
    });
  };

  render() {
    const { input, solution } = this.state;
    const { inputkey, clearInput, equals } = this;
    const display = solution.length === 0 ? input : solution;

    console.log(this.state);

    return (
      <PageWrapper>
        <CalcWrapper>
          <Display content={display} />
          <Calculator
            inputkey={inputkey}
            clearInput={clearInput}
            equals={equals}
          />
        </CalcWrapper>
      </PageWrapper>
    );
  }
}

export default App;
