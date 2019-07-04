import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function FavsDisplayer(props) {
	const { user } = useAuth0();
	const handleEliminate = recipieId => {
		axios({
			url: `/api/delete/${recipieId}/${user.sub}`,
			method: 'DELETE',
		});
		window.location.reload(false);
	};

	const history = useHistory();
	return (
		<div className='favMeals'>
			{props.data.map((recipie, index) => (
				<Card key={index} style={{ width: '18rem' }} className='recipieCard fav'>
					<Card.Img
						variant='top'
						src={recipie.recipieThumb}
						onClick={() => history.push(`/recipie/${recipie.recipieId}`)}
					/>
					<Card.Body className='card-body'>
						<Card.Title className='titleCard'>{recipie.recipieName}</Card.Title>
						<Button
							style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
							variant='default'
							className='fav-button'
							onClick={() => handleEliminate(recipie.recipieId)}>
							Eliminate
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default FavsDisplayer;
