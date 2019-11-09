import React from 'react';
import about from '../img/about.svg';
import home from '../img/home.svg';
import logout from '../img/logout.svg';
import menu from '../img/menu.svg';
import settings from '../img/settings.svg';

import Header from './Header/Header';
import UserData from './UserData/UserData';

import { MainContentCss, UserProjectsCss, HeaderCss} from './MainContent.styled';

function MainContent() {
	return (
		<MainContentCss>

			<HeaderCss>
				<Header />
			</HeaderCss>

			<UserProjectsCss>
				<UserData />
			</UserProjectsCss>

		</MainContentCss>
	);
}
export default MainContent;
