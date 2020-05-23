import React, { Component } from 'react';
import Balance from './balance';
import InterestForm from './interestForm';

export class InterestCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: '',
      period: '',
      presentValue: '',
      futureValue: 0,
    };
  }

  myCallback = (dataFromChild) => {
    this.setState({ futureValue: dataFromChild.futureValue });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Interest Calculator</h2>
          <Balance balance={this.state.futureValue} />
          <InterestForm handleSubmit={this.myCallback} />
        </div>
      </>
    );
  }
}
