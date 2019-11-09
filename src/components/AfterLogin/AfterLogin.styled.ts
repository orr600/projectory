import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	min-width: 700px;
`;

export const ContainerChild = styled.div`
	height: 100%;
	width: calc(100% - 80px);
	background-color: black;
`;
export const SideBarMain = styled.div`
	width: 80px;
	height: 100%;
`;
