import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function RecipieCard({ id, thumbnail, name, tags, category }) {
	const history = useHistory();
	return (
		<Card
			style={{ width: '18rem' }}
			className='recipieCard'
			onClick={() => history.push(`/recipie/${id}`)}>
			<Card.Img variant='top' src={thumbnail} />
			<Card.Body>
				<Card.Title className='titleCard'>{name}</Card.Title>
				<Card.Text>
					{tags ? (
						<p>
							Category: {category} <br></br> Tags: {tags}
						</p>
					) : (
						<p>
							Category: {category} <br></br> Tags: None
						</p>
					)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default RecipieCard;
