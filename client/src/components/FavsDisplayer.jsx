import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function FavsDisplayer(props) {
	const { user } = useAuth0();
	const handleEliminate = receipeId => {
		axios({
			url: `/api/delete/${receipeId}/${user.sub}`,
			method: 'DELETE',
		});
		window.location.reload(false);
	};

	const history = useHistory();
	return (
		<div className='favMeals'>
			{props.data.map((receipe, index) => (
				<Card key={index} style={{ width: '18rem' }} className='receipeCard fav'>
					<Card.Img
						variant='top'
						src={receipe.receipeThumb}
						onClick={() => history.push(`/receipe/${receipe.receipeId}`)}
					/>
					<Card.Body className='card-body'>
						<Card.Title className='titleCard'>{receipe.receipeName}</Card.Title>
						<Button
							style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
							variant='default'
							className='fav-button'
							onClick={() => handleEliminate(receipe.receipeId)}>
							Eliminate
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default FavsDisplayer;
