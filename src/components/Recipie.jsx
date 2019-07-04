import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import AddToFavs from './AddToFavs';

function Recipie() {
	const { id } = useParams();
	const [recipie, setRecipie] = useState({});
	let ingredientsArray = [];
	let measuresArray = [];

	useEffect(() => {
		axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => {
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
			console.log(recipie.ingredients);
		});
	}, []);
	return (
		<div>
			<h1 className='recipie-name'>{recipie.name}</h1>
			<div className='in'>
				<img className='insideImg' src={recipie.thumbnail} alt={recipie.name} />
				<div className='leftbar'>
					<Ingredients ingArray={recipie.ingredients} measuresArray={recipie.measures} />
					<AddToFavs id={recipie.id} thumbnail={recipie.thumbnail} name={recipie.name} />
				</div>
			</div>
			<Instructions instr={recipie.instructions} />
		</div>
	);
}

export default Recipie;
