import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = createContext();

/*
 This component establishes what data can be used
 */
export const AnimalProvider = (props) => {
	const [animals, setAnimals] = useState([]);

	const getAnimals = () => {
		return fetch("http://localhost:8088/animals?_expand=location")
			.then((res) => res.json())
			.then(setAnimals);
	};
	const getAnimalById = (id) => {
		return fetch(
			`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`
		).then((res) => res.json());
	};

	const addAnimal = (animal) => {
		return fetch("http://localhost:8088/animals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(animal),
		}).then(getAnimals);
	};

	const releaseAnimal = (animalId) => {
		return fetch(`http://localhost:8088/animals/${animalId}`, {
			method: "DELETE",
		}).then(getAnimals);
	};

	return (
		<AnimalContext.Provider
			value={{
				animals,
				addAnimal,
				getAnimals,
				getAnimalById,
			}}
		>
			{props.children}
		</AnimalContext.Provider>
	);
};
