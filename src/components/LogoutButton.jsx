import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<div className='button-container'>
				<Button
					style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
					className='button'
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
