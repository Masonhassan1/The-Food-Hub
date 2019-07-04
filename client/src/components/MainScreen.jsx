import React from 'react';
import RandomMeal from './RandomMeal';
import ReceipeCard from './ReceipeCard';

function MainScreen({ objReceipe }) {
	return objReceipes === null || objReceipes === '' ? (
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
			{objReceipes.map(receipe => (
				<ReceipeCard
					id={receipe.idMeal}
					thumbnail={receipe.strMealThumb}
					name={receipe.strMeal}
					tags={receipe.strTags}
					category={receipe.strCategory}
				/>
			))}
		</div>
	);
}

export default MainScreen;
