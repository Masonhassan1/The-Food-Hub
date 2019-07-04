import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function RandomMeal() {
	let history = useHistory();

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
		<>
			<Card
				style={{ width: '18rem' }}
				className='recipieCard'
				onClick={() => history.push(`/recipie/${recipie.id}`)}>
				<Card.Img variant='top' src={recipie.thumbnail} />
				<Card.Body>
					<Card.Title className='titleCard'>{recipie.name}</Card.Title>
					<Card.Text>
						{recipie.tags ? (
							<p>
								Category: {recipie.category} <br></br> Tags: {recipie.tags}
							</p>
						) : (
							<p>
								Category: {recipie.category} <br></br> Tags: None
							</p>
						)}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default RandomMeal;
