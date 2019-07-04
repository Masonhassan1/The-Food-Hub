import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Ingredients(props) {
	const { ingArray, measuresArray } = props;

	if (!ingArray || !measuresArray) return <div>Loading...</div>;
	else {
		console.log(ingArray);
		const fullArray = [];
		for (var i = 1; i < ingArray.length; i++) {
			if (ingArray[i] !== null) fullArray.push(`${measuresArray[i]}- ${ingArray[i]}`);
			else return;
		}
		console.log(fullArray);
		return fullArray ? (
			<div className='ingredients-container'>
				<h2>Ingredients</h2>
				<ListGroup className='ingredients'>
					{fullArray.map(ingredient => (
						<ListGroup.Item>{ingredient}</ListGroup.Item>
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
