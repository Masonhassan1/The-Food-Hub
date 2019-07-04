import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinearProgress } from '@material-ui/core';

function Ingredients(props) {
	const { ingArray, measuresArray } = props;

	if (!ingArray || !measuresArray)
		return (
			<div className='prog'>
				<LinearProgress />
			</div>
		);
	else {
		const fullArray = [];
		for (var i = 1; i < ingArray.length; i++) {
			if (ingArray[i] !== null) fullArray.push(`${measuresArray[i]}- ${ingArray[i]}`);
			else return;
		}
		return fullArray ? (
			<div className='ingredients-container'>
				<h2>Ingredients</h2>
				<ListGroup className='ingredients'>
					{fullArray.map((ingredient, index) => (
						<ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		) : (
			<div>
				<h2>Ingredients</h2>
				<p>Apparently there are no ingredients.</p>
			</div>
		);
	}
}

export default Ingredients;
