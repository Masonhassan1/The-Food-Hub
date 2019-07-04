import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import AddToFavs from './AddToFavs';

function Receipe() {
	const { id } = useParams();
	const [receipe, setReceipe] = useState({});
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
		<div>
			<h1 className='receipe-name'>{receipe.name}</h1>
			<div className='in'>
				<img className='insideImg' src={receipe.thumbnail} alt={receipe.name} />
				<div className='leftbar'>
					<Ingredients ingArray={receipe.ingredients} measuresArray={receipe.measures} />
					<AddToFavs id={receipe.id} thumbnail={receipe.thumbnail} name={receipe.name} />
				</div>
			</div>
			<Instructions instr={receipe.instructions} />
		</div>
	);
}

export default Recipie;
