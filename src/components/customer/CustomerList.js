import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { useHistory } from "react-router-dom";
import { CustomerCard } from "./CustomerCard";
import "./Customer.css";

export const CustomerList = () => {
	// This state changes when `getCustomers()` is invoked below
	const { customers, getCustomers } = useContext(CustomerContext);

	/*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
	useEffect(() => {
		console.log("CustomerList: Initial render before data");
		getCustomers();
	}, []);

	/*
        This effect is solely for learning purposes. The effect
        it is responding to is that the Customer state changed.
    */
	useEffect(() => {
		console.log("CustomerList: Customer state changed");
		console.log(customers);
	}, [customers]);

	const history = useHistory();

	return (
		<>
			<button
				className="add__btn"
				onClick={() => {
					history.push("/customers/create");
				}}
			>
				Add Customer
			</button>
			<div className="customers">
				<h2>Customers</h2>
				{customers.map((customer) => {
					return (
						<CustomerCard key={customer.id} customer={customer} />
					);
				})}
			</div>
		</>
	);
};
