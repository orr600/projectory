import React from 'react';
import about from '../../../img/about.svg';
import home from '../../../img/home.svg';
import logout from '../../../img/logout.svg';
import menu from '../../../img/menu.svg';
import settings from '../../../img/settings.svg';

import SignIn from '../../SignInPage/SignIn/SignIn';
import {
	SideBarCss,
	SideBarIcons,
	LogoutSeg,
	IconSize,
	SideMenuText,
	MenuIconText,
	BoxIconText,
	FontHeaders
} from './SideBar.styled';

function SideBar() {
	return (
		<SideBarCss>
			<SideBarIcons>
				<div className="up-seg">
					<MenuIconText>
						<IconSize src={menu} alt="menu-icon"></IconSize>
					</MenuIconText>
					<BoxIconText>
						<IconSize src={home} alt="home-icon"></IconSize>
						<FontHeaders>home</FontHeaders>
					</BoxIconText>
					<BoxIconText>
						<IconSize src={about} alt="about-icon"></IconSize>
						<FontHeaders>about</FontHeaders>
					</BoxIconText>
					<BoxIconText>
						<IconSize src={settings} alt="settings-icon"></IconSize>
						<FontHeaders>settings</FontHeaders>
					</BoxIconText>
				</div>

				<LogoutSeg>
					<IconSize src={logout} alt="logout-icon"></IconSize>
					<FontHeaders>logout</FontHeaders>
				</LogoutSeg>
			</SideBarIcons>
		</SideBarCss>
	);
}

export default SideBar;
