import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import FavsDisplayer from './FavsDisplayer';

function Profile() {
	const { user, isAuthenticated } = useAuth0();
	const [userDBData, setUserDBData] = useState([]);

	useEffect(() => {
		const getUserData = () => {
			axios
				.get('/api')
				.then(response => {
					const data = response.data;
					const userData = data.filter(obj => obj.usrId === user.sub);
					setUserDBData(userData);
				})
				.catch(err => {
					console.log('Error getting your favs');
					console.log(err);
				});
		};
		getUserData();
	}, []);

	return isAuthenticated ? (
		<div>
			{user.email_verified ? (
				<Alert className='verified' variant='success'>
					Account Verified.
				</Alert>
			) : (
				<Alert className='not-verified' variant='danger'>
					Account not Verified, check your inbox.
				</Alert>
			)}
			<Container className='profile-container'>
				<Row>
					<Col sm={4} className='col1'>
						<img className='profile-img' src={user.picture} alt={user.name} />
					</Col>
					<Col className='col2' sm={7}>
						<h2 className='profile-nickname'>{user.nickname}</h2>
						<p className='profile-name'>Name: {user.name}</p>
						<p className='profile-email'>Email: {user.email}</p>
					</Col>
				</Row>
			</Container>
			<div>
				<h3 className='fav-title'>Your Favorite Receipes</h3>
				<FavsDisplayer data={userDBData} />
			</div>
		</div>
	) : (
		<div>You must login to be able to see your profile</div>
	);
}
export default Profile;
