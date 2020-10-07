import React, { useContext, useRef, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeForm = (props) => {
	const { addEmployee, employees, getEmployees } = useContext(
		EmployeeContext
	);
	const { locations, getLocations } = useContext(LocationContext);
	const { animals, getAnimals } = useContext(AnimalContext);

	const name = useRef(null);
	const location = useRef(null);
	const employee = useRef(null);
	const animal = useRef(null);

	useEffect(() => {
		getEmployees().then(getLocations);
	}, []);

	const constructNewEmployee = () => {
		const locationId = parseInt(location.current.value);
		const employeeId = parseInt(employee.current.value);

		if (locationId === 0) {
			window.alert("Please select a location");
		} else {
			addEmployee({
				name: name.current.value,
				locationId,
				employeeId,
			}).then(() => props.history.push("/employees"));
		}
	};

	const history = useHistory();
	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeName">Employee name: </label>
					<input
						type="text"
						id="employeeName"
						ref={name}
						required
						autoFocus
						className="form-control"
						placeholder="Employee name"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select
						defaultValue=""
						name="location"
						ref={location}
						id="employeeLocation"
						className="form-control"
					>
						<option value="0">Select a location</option>
						{locations.map((e) => (
							<option key={e.id} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Caretaker for: </label>
					<select
						defaultValue=""
						name="animal"
						ref={animal}
						id="employeeAnimal"
						className="form-control"
					>
						<option value="0">Select an animal</option>
						{animals.map((e) => (
							<option key={e.id} value={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button
				type="submit"
				onClick={(evt) => {
					evt.preventDefault(); // Prevent browser from submitting the form
					constructNewEmployee();
				}}
				className="btn btn-primary"
			>
				Save Employee
			</button>
		</form>
	);
};
