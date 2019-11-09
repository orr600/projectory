import React from 'react';
import SignInPage from '../SignInPage/SignInPage';
import SideBar from './SideBar/SideBar';

import { Container, ContainerChild, SideBarMain } from './AfterLogin.styled';
import MainContent from './MainContent/MainContent';

function AfterLogin() {
	return (
		<Container>
			<ContainerChild>
				<MainContent />
			</ContainerChild>

			<SideBarMain>
				<SideBar />
			</SideBarMain>
		</Container>
	);
}

export default AfterLogin;
