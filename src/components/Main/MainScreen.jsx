import React from 'react';
import RandomMeal from './RandomMeal';
import RecipieCard from './RecipieCard';

function MainScreen({ objRecipies }) {
	return objRecipies === null || objRecipies === '' ? (
		<div>
			<h3 className='random-title'>Random meals</h3>
			<div className='randomMeals'>
				<RandomMeal />
				<RandomMeal />
				<RandomMeal />
				<RandomMeal />
			</div>
		</div>
	) : (
		<div className='searchedMeals'>
			{objRecipies.map(recipie => (
				<RecipieCard
					id={recipie.idMeal}
					thumbnail={recipie.strMealThumb}
					name={recipie.strMeal}
					tags={recipie.strTags}
					category={recipie.strCategory}
				/>
			))}
		</div>
	);
}

export default MainScreen;
