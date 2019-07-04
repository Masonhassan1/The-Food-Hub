import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	const history = useHistory();
	const goToProfile = () => {
		history.push(`/profile`);
		window.location.reload(false);
	};
	return (
		isAuthenticated && (
			<div className='button-container'>
				<Button
					style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
					className='button'
					onClick={goToProfile}
					variant='default'>
					Profile
				</Button>
				<Button
					style={{ color: 'white', background: 'rgb(65, 65, 65)', marginLeft: '5%' }}
					variant='default'
					className='button'
					onClick={logout}>
					Logout
				</Button>
			</div>
		)
	);
};

export default LogoutButton;
