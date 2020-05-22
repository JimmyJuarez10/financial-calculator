import React, { useState } from 'react';

const InterestForm = (props) => {
	return (
		<>
			<h2>Interest Calculator</h2>
			<h3> Information Required</h3>
			<form>
				<div className="form-control">
					<label htmlFor="presentValue">
						Enter how much money you have/owe.
					</label>
					<input
						type="number"
						value={props.presentValue}
						// onChange={(e) => setPresentValue(e.target.value)}
						placeholder="Present Value"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="period">Time</label>
					<input
						type="number"
						value={props.period}
						// onChange={(e) => setPeriod(e.target.value)}
						placeholder="Time"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="interest">Interest </label>
					<input
						type="number"
						value={props.interest}
						// onChange={(e) => setInterest(e.target.value)}
						placeholder="Interest"
					/>
				</div>
				<input type="button" value="submit" />
			</form>
		</>
	);
};

export default InterestForm;
