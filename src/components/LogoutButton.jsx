import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<div>
				<Button className='logButton'>Profile</Button> {/*Handle going to <Profile/>*/}
				<Button className='logButton' onClick={logout}>
					Logout
				</Button>
			</div>
		)
	);
};

export default LogoutButton;
