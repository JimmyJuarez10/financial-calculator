import React from 'react';

export class InterestCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			period: 0,
			interest: 0,
			presentValue: 0,
		};
	}
	handleSubmission() {
		const base = 1 + this.state.interest;
		this.state.futureValue =
			this.state.presentValue * Math.pow(base, this.state.period);
		console.log(this.state.futureValue);
	}
	render() {
		return (
			<>
				<h2>Interest Calculator</h2>
				<h3> Information Required</h3>
				<form onSubmit={this.state.handleSubmission}>
					<div className="form-control">
						<label htmlFor="presentValue">
							Enter how much money you have/owe.
						</label>
						<input
							type="number"
							value={this.state.presentValue}
							placeholder="Present Value"
						/>
					</div>
					<div className="form-control">
						<label htmlFor="period">Time (in months) </label>
						<input type="number" value={this.state.period} placeholder="Time" />
					</div>
					<div className="form-control">
						<label htmlFor="interest">Interest </label>
						<input
							type="number"
							value={this.state.interest}
							placeholder="Interest"
						/>
					</div>
					<button className="btn">Calculate Interest</button>
				</form>
			</>
		);
	}
}
// export const CalcInterest = () => {
// 	const [period, setPeriod] = useState();
// 	const [presentValue, setPresentValue] = useState();
// 	const [interest, setInterest] = useState();
// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 	};

// };
