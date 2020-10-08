import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = (props) => {
	// This state changes when `getEmployees()` is invoked below
	const { employees, getEmployees } = useContext(EmployeeContext);

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
	useEffect(() => {
		console.log("EmployeeList: Employee state changed");
		console.log(employees);
	}, [employees]);

	const history = useHistory();

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
				{employees.map((employee) => {
					return <Employee key={employee.id} employee={employee} />;
				})}
			</div>
		</>
	);
};
