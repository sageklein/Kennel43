import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = (props) => {
	// This state changes when `getEmployees()` is invoked below
	const { employees, getEmployees, searchTerms } = useContext(EmployeeContext);

	const [filteredEmployees, setFiltered] = useState([]);

	const history = useHistory();

	/*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
	useEffect(() => {
		console.log("EmployeeList: Initial render before data");
		getEmployees();
	}, []);

	/*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Employee state changed.
    */
	// searchTerms will cause a change
	useEffect(() => {
		if (searchTerms !== "") {
			// If the search field is not blank, display matching employees
			const subset = employees.filter((employee) =>
				employee.name
					.toLowerCase()
					.includes(searchTerms.toLowerCase().trim())
			);
			setFiltered(subset);
		} else {
			// If the search field is blank, display all animals
			setFiltered(employees);
		}
	}, [searchTerms, employees]);



	return (
		<>
			<h2>Employees</h2>
			<div className="add__btn">
				<button
					onClick={() => {
						history.push("/employees/create");
					}}
				>
					Add Employee
				</button>
			</div>
			<div className="employees">
				{filteredEmployees.map((employee) => {
					return <Employee key={employee.id} employee={employee} />;
				})}
			</div>
		</>
	);
};
