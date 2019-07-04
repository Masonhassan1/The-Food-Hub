import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function AddToFavs({ id, thumbnail, name }) {
	const { user, isAuthenticated } = useAuth0();
	const addReceipeToFav = () => {
		axios({
			url: '/api/save',
			method: 'POST',
			data: {
				usrId: user.sub,
				receipeID: id,
				receipeThumb: thumbnail,
				receipeName: name,
			},
		})
			.then(() => console.log('Receipe saved'))
			.catch(() => console.log('EERRROOOORR'));
		window.alert('Receipe added to favourites');
	};

	return isAuthenticated ? (
		<div className='add-fav'>
			<h2>Add me to favs</h2>
			<Button
				style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
				className='button fav'
				variant='default'
				onClick={addReceipeToFav}>
				Add me
			</Button>
		</div>
	) : (
		<div>Log in to add me</div>
	);
}

export default AddToFavs;
