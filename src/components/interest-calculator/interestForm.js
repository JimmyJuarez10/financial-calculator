import React, { useState } from 'react';

const InterestForm = (props) => {
  const [interest, setInterest] = useState('');
  const [period, setPeriod] = useState('');
  const [presentValue, setPresentValue] = useState('');

  const form = {
    interest: interest,
    period: period,
    presentValue: presentValue,
  };

  const onSubmit = () => {
    const interestPercent = interest / 100;
    const base = 1 + interestPercent;
    const futureValue = Number.parseFloat(
      presentValue * Math.pow(base, period)
    ).toFixed(2);
    form.futureValue = futureValue;
    props.handleSubmit(form);
  };

  return (
    <>
      <h3> Information Required</h3>
      <form>
        <div className="form-control">
          <label htmlFor="presentValue">Enter how much money you have:</label>
          <input
            type="number"
            value={presentValue}
            onChange={(e) => setPresentValue(e.target.value)}
            placeholder="Present Value"
          />
        </div>
        <div className="form-control">
          <label htmlFor="period">Number of years: </label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            placeholder="Time"
          />
        </div>
        <div className="form-control">
          <label htmlFor="interest">Interest (%) </label>
          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Interest"
          />
        </div>
        <input
          className="btn"
          type="button"
          value="submit"
          onClick={onSubmit}
        />
      </form>
    </>
  );
};

export default InterestForm;
