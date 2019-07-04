import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function ReceipeCard({ id, thumbnail, name, tags, category }) {
	const history = useHistory();
	return (
		<Card
			style={{ width: '18rem' }}
			className='receipeCard'
			onClick={() => history.push(`/receipe/${id}`)}>
			<Card.Img variant='top' src={thumbnail} />
			<Card.Body>
				<Card.Title className='titleCard'>{name}</Card.Title>
				<Card.Text>
					{tags ? (
						<span>
							Category: {category} <br></br> Tags: {tags}
						</span>
					) : (
						<span>
							Category: {category} <br></br> Tags: None
						</span>
					)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default RecipieCard;
