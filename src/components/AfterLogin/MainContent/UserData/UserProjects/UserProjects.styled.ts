import styled from 'styled-components';

export const ContainerProject = styled.div`
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
export const ProjectListCss = styled.div`
display:flex;
flex-direction:column;
overflow:auto;
	max-height:800px;
	width: 100%;
	::-webkit-scrollbar {
  width: 10px;
 
}


::-webkit-scrollbar-track {
  background:black;
   border-radius:4px;
}
 
::-webkit-scrollbar-thumb {

  background: #888; 
   border-radius:4px;
}
 

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
export const TextMyProject = styled.div`
	height: 22px;
	width: 111px;
	color: #ffffff;
	font-family: Raleway;
	font-weight: bold;
	font-size: 20px;
`;
export const DivNewProject = styled.div`
	height: 24px;
	width: 115px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items:center;
	
`;

export const TextNewProject = styled.div`
	height: 19px;
	width: 94px;
	color: #42c8b5;
	font-family: Raleway;
	font-size: 16px;
	font-weight: bold;
`;
export const PlusIcon = styled.img`
cursor:pointer;`;

