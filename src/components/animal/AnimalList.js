import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
	// This state changes when `getAnimals()` is invoked below
	const { animals, getAnimals } = useContext(AnimalContext);

	//useEffect - reach out to the world for something
	useEffect(() => {
		console.log("AnimalList: useEffect - getAnimals");
		getAnimals();
	}, []);

	const history = useHistory();

	return (
		<>
			<h2>Animals</h2>
			<div className="btn">
			<button
				className="add__btn"
				onClick={() => {
					history.push("/animals/create");
				}}
			>
				Add Animal
			</button>
			</div>
			<div className="animals">
				{animals.map((animal) => {
					return <AnimalCard 
					key={animal.id} 
					animal={animal} />;
				})}
			</div>
		</>
	);
};
