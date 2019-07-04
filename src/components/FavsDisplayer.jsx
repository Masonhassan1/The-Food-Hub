import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function FavsDisplayer(props) {
	console.log(props.data);
	const amount = props.data.length;
	const history = useHistory();
	return (
		<div className='favMeals'>
			{props.data.map(recipie => (
				<Card
					style={{ width: '18rem' }}
					className='recipieCard fav'
					onClick={() => history.push(`/recipie/${recipie.recipieId}`)}>
					<Card.Img variant='top' src={recipie.recipieThumb} />
					<Card.Body>
						<Card.Title className='titleCard'>{recipie.recipieName}</Card.Title>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default FavsDisplayer;
