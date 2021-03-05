import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeSearch = () => {
	const { setSearchTerms } = useContext(EmployeeContext);

	useEffect(() => {
		setSearchTerms("");
	}, []);

	return (
		<>
			<div className="search__bar">
				Employee search:
				<input
					type="text"
					className="input--wide"
					onKeyUp={(keyEvent) =>
						setSearchTerms(keyEvent.target.value)
					}
					placeholder="Search for an employee... "
				/>
			</div>
		</>
	);
};
