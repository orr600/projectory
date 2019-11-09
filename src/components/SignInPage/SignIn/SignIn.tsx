import React from 'react';
import {
	Rectangle,
	SignInText,
	SignInTextField,
	EmailAddress,
	EnterYourDetailsB,
	TypeYourEmailHere,
	TypeYourPasswordHere,
	Password,
	Pass,
	ForgotYourPassword,
	IconShowPassword,
	ButtonFill,
	RectangleButton
} from './SignIn.styles';
import '../img/show_password.svg';

function SignIn() {
	return (
		<Rectangle>
			<SignInText>Sign In</SignInText>
			<EnterYourDetailsB>Enter your details below</EnterYourDetailsB>
			<EmailAddress>Email Address</EmailAddress>
			<SignInTextField
				type="text"
				name="email"
				placeholder="Type your email here"
			></SignInTextField>
			<Pass>
				<Password>Password</Password>
				<ForgotYourPassword>Forgot your password?</ForgotYourPassword>
			</Pass>
			<SignInTextField
				type="password"
				name="name"
				placeholder="Type your password here"
			></SignInTextField>
			<ButtonFill>
				<RectangleButton>Sign In</RectangleButton>
			</ButtonFill>
		</Rectangle>
	);
}

export default SignIn;
