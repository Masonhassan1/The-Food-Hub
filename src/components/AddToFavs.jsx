import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddToFavs({ id, thumbnail, name }) {
	const { user, isAuthenticated } = useAuth0();
	const addRecipieToFav = () => {
		axios({
			url: '/api/save',
			method: 'POST',
			data: {
				usrId: user.sub,
				recipieId: id,
				recipieThumb: thumbnail,
				recipieName: name,
			},
		})
			.then(() => console.log('data sent to server'))
			.catch(() => console.log('EERRROOOORR'));
	};

	return isAuthenticated ? (
		<div>
			<h2>Add me to favs</h2>
			<button onClick={addRecipieToFav}>Add me</button>
		</div>
	) : (
		<div>Log in to add me</div>
	);
}

export default AddToFavs;
