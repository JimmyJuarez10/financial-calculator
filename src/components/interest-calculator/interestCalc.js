import React, { Component } from 'react';
import Balance from './balance';
import InterestForm from './interestForm';

export class InterestCalc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				interest: '',
				period: '',
				presentValue: '',
				futureValue: '',
			},
		};
	}
	render() {
		const form = this.state.form;
		return (
			<>
				<InterestForm value={form} />
				<Balance balance={this.state.futureValue} />
			</>
		);
	}
}
