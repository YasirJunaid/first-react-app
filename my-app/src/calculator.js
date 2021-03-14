import React, { Component } from "react";
import "./index.css";


export default class AgeCalculator extends Component {
    state = {};
    render() {
        return (
            <div id="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}><h1>Age Calculator</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Date of birth: </span></td>
                            <td><input ref={(r) => this.dob = r} type="date" /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={this.calculateAge}>Calculate age</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><div className="result">{this.state.ageString}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    calculateAge = () => {
        const dateString = this.dob.value;
        const now = new Date();

        const yearNow = now.getFullYear();
        const monthNow = now.getMonth();
        const dateNow = now.getDate();

        const dob = new Date(dateString);

        const yearDob = dob.getFullYear();
        const monthDob = dob.getMonth();
        const dateDob = dob.getDate();

        let yearAge = yearNow - yearDob;
        let monthAge;

        if (monthNow >= monthDob) {
            monthAge = monthNow - monthDob;
        } else {
            yearAge--;
            monthAge = 12 + monthNow - monthDob;
        }

        let dateAge;
        if (dateNow >= dateDob) {
            dateAge = dateNow - dateDob;
        } else {
            monthAge--;
            dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        const age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };

        const yearString = (age.years > 1) ? "years" : "year";
        const monthString = (age.months > 1) ? " months" : " month";
        const dayString = (age.days > 1) ? " days" : " day";

        let ageString = "";

        if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
        } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
            ageString = "Only " + age.days + dayString + " old!";
        } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
            ageString = age.years + yearString + " old. Happy Birthday!!";
        } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.years + yearString + " and " + age.months + monthString + " old.";
        } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.months + monthString + " and " + age.days + dayString + " old.";
        } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
            ageString = age.years + yearString + " and " + age.days + dayString + " old.";
        } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.months + monthString + " old.";
        } else {
            ageString = "Oops! Could not calculate age!";
        }

        this.setState({ ageString });
    };
}

