import React from 'react';

import logo from '../../../../img/logo.svg';

import { HeaderA, Icon, UserEmail } from './Header.styled';

function Header() {
	return (
		<HeaderA>
			<Icon>
				<img src={logo} alt="logo"></img>
			</Icon>
			<UserEmail>ora@spectory.com</UserEmail>
		</HeaderA>
	);
}

export default Header;
