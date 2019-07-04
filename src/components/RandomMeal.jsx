import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipieCard from './RecipieCard';

function RandomMeal() {
	const [recipie, setRecipie] = useState({});
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
			const RecipieObj = {
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
			setRecipie(RecipieObj);
		});
	}, []);

	return (
		<RecipieCard
			id={recipie.id}
			thumbnail={recipie.thumbnail}
			name={recipie.name}
			tags={recipie.tags}
			category={recipie.category}
		/>
	);
}

export default RandomMeal;
