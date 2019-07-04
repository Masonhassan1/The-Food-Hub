import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function LoginButton() {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		!isAuthenticated && (
			<Button
				style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
				variant='default'
				className='button button-container'
				onClick={loginWithRedirect}>
				Login
			</Button>
		)
	);
}

export default LoginButton;
