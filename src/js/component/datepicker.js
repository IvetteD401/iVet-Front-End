import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class Example extends React.Component {
	state = {
		startDate: new Date()
	};
	handleChange = date => {
		this.setState({
			startDate: date,
			endDate: date
		});
	};
	render() {
		return (
			// <DatePicker selected={this.state.startDate} onChange={this.handleChange} />;

			<DatePicker
				selected={this.state.startDate}
				onChange={this.handleChange}
				timeInputLabel="Time:"
				dateFormat="MM/dd/yyyy h:mm aa"
				showTimeInput
			/>
		);
	}
}
export default Example;
