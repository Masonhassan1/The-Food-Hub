import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Ingredients(props) {
	const { ingArray, measuresArray } = props;

	if (!ingArray) return <div>Loading...</div>;
	else {
		console.log(ingArray);
		const fullArray = [];
		for (var i = 1; i < ingArray.length; i++) {
			if (ingArray[i] !== null) fullArray.push(`${measuresArray[i]}- ${ingArray[i]}`);
			else return;
		}
		console.log(fullArray);
		return fullArray ? (
			<ListGroup variant='flush' className='ingredients'>
				{fullArray.map(ingredient => (
					<ListGroup.Item>{ingredient}</ListGroup.Item>
				))}
			</ListGroup>
		) : (
			<div>Apparently there are no ingredients set</div>
		);
	}
}

export default Ingredients;
