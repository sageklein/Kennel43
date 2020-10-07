// Update this line of code to include releaseAnimal
const { animals, getAnimals, releaseAnimal } = useContext(AnimalContext);

<button
	onClick={() => {
		releaseAnimal(animal.id).then(() => {
			history.push("/animals");
		});
	}}
>
	Release Animal
</button>;
