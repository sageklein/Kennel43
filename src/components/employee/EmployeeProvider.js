import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = createContext();

/*
 This component establishes what data can be used
 */
export const EmployeeProvider = (props) => {
	const [employees, setEmployees] = useState([]);
	const [searchTerms, setSearchTerms] = useState("");

	const getEmployees = () => {
		return fetch("http://localhost:8088/employees")			.then((res) => res.json())
			.then(setEmployees);
	};
	const getEmployeeById = (id) => {
		return fetch(
			`http://localhost:8088/employees/${id}?_expand=location`
		).then((res) => res.json());
	};

	const addEmployee= (employee) => {
		return fetch("http://localhost:8088/employees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(employee),
		}).then(getEmployees);
	};

	const releaseEmployee = (employeeId) => {
		return fetch(`http://localhost:8088/employees/${employeeId}`, {
			method: "DELETE",
		}).then(getEmployees);
	};

	return (
		<EmployeeContext.Provider
			value={{
				employees,
				addEmployee,
				getEmployees,
				getEmployeeById,
				releaseEmployee,
				searchTerms,
				setSearchTerms,
			}}
		>
			{props.children}
		</EmployeeContext.Provider>
	);
};
