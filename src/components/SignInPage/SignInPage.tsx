import React from 'react';
import logo from '../../img/logo.svg';
import SignIn from './SignIn/SignIn';
import { Logo, RectangleA, PageLogin } from './signInPage.styled';

function SignInPage() {
	return (
		<PageLogin>
			<div>
				<Logo src={logo} alt="Logo" />
			</div>

			<RectangleA>
				<SignIn />
			</RectangleA>
		</PageLogin>
	);
}

export default SignInPage;
