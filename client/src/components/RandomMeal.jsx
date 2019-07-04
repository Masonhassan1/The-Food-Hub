import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReceipeCard from './ReceipeCard';

function RandomMeal() {
	const [receipe, setReceipe] = useState({});
	let ingredientsArray = [];
	let measuresArray = [];

	useEffect(() => {
		axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => {
			const rec = res.data.meals[0];
			for (var i = 1; i < 20; i++) {
				const indexIngredient = `strIngredient${i}`;
				const indexMeasure = `strMeasure${i}`;
				if (rec[indexIngredient] !== '') {
					ingredientsArray.push(rec[indexIngredient]);
					measuresArray.push(rec[indexMeasure]);
				}
			}
			const ReceipeObj = {
				name: rec.strMeal,
				id: rec.idMeal,
				category: rec.strCategory,
				thumbnail: rec.strMealThumb,
				tags: rec.strTags,
				instructions: rec.strInstructions,
				ingredients: ingredientsArray,
				measures: measuresArray,
				youtubeLink: rec.strYoutube,
				source: rec.strSource,
			};
			setReceipe(ReceipeObj);
		});
	}, []);

	return (
		<ReceipeCard
			id={receipe.id}
			thumbnail={receipe.thumbnail}
			name={receipe.name}
			tags={receipe.tags}
			category={receipe.category}
		/>
	);
}

export default RandomMeal;
