import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";


export const ApplicationViews = (props) => {
	return (
		<>
			<LocationProvider>
				<Route exact path="/">
					<LocationList />
				</Route>
			</LocationProvider>

			<AnimalProvider>
				<LocationProvider>
					<CustomerProvider>
						<Route exact path="/animals/create">
							<AnimalForm />
						</Route>
					</CustomerProvider>
				</LocationProvider>
			</AnimalProvider>

			<AnimalProvider>
				<Route exact path="/animals/detail/:animalId(\d+)">
					<AnimalDetail />
				</Route>
			</AnimalProvider>

			<AnimalProvider>
				<LocationProvider>
					<CustomerProvider>
						<Route path="/animals/edit/:animalId(\d+)">
							<AnimalForm />
						</Route>
					</CustomerProvider>
				</LocationProvider>
			</AnimalProvider>

			<AnimalProvider>
				<Route exact path="/animals">
					<AnimalList />
				</Route>
			</AnimalProvider>

			<CustomerProvider>
				<Route path="/customers">
					<CustomerList />
				</Route>
			</CustomerProvider>

			<AnimalProvider>
				<EmployeeProvider>
					<LocationProvider>

						<Route
							exact
							path="/employees"
							render={(props) => <EmployeeList {...props} />}
						/>

						<Route exact path="/employees/create">
							<EmployeeForm />
						</Route>
					</LocationProvider>
				</EmployeeProvider>
			</AnimalProvider>

			<EmployeeProvider>
				<Route exact path="/employees/detail/:employeeId(\d+)">
					<EmployeeDetail />
				</Route>
			</EmployeeProvider>
		</>
	);
};
