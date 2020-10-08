import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams, useHistory } from "react-router-dom";

export const EmployeeDetail = () => {
	const { getEmployeeById, releaseEmployee } = useContext(
		EmployeeContext
	);

	const [employee, setEmployee] = useState({});
	const [location, setLocation] = useState({});


	const { employeeId } = useParams();
	const history = useHistory();

	useEffect(() => {
		console.log("useEffect", employeeId);
		getEmployeeById(employeeId).then((response) => {
			setEmployee(response);
			setLocation(response.location);
		});
	}, []);

	return (
		<>
			<section className="employee">
				<h3 className="employee__name">{employee.name}</h3>
				<div className="employee__location">
					Location: {location.address}
			<div className="btn">
				<button
					onClick={() => {
						releaseEmployee(employee.id).then(() => {
							history.push("/employees");
						});
					}}
				>
					Fire
				</button>
				</div>
			</div>
			</section>
		</>
	);
};
