import styled from 'styled-components';

export const ContainerTask = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const ContainerText = styled.div`
	height: 91px;
	min-width:200px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
`;
export const TaskListCss = styled.div`
	height: calc(100%-91px);
	width: 100%;
`;
export const ProjectName = styled.div`
	height: 22px;
	width: 100px;
	color: #ffffff;
	font-family: Raleway;
	font-weight: bold;
	font-size: 20px;
`;
export const DivNewTask = styled.div`
	height: 24px;
	width: 100px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items:center;
	
`;

export const TextNewTask = styled.div`
	height: 19px;
	width: 80px;
	color: #42c8b5;
	font-family: Raleway;
	font-size: 16px;
	font-weight: bold;
`;
export const PlusIcon = styled.img``;