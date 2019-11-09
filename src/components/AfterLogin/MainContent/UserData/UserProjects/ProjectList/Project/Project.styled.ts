import { Container } from './../../../../../AfterLogin.styled';
import styled from 'styled-components';

export const ProjectWithDevider = styled.div`
	height: 73px;
	width: 100%;
	display: flex;
	flex-direction: column;
  align-items:center;
  :hover{
    background-color: #323337;
    border-radius:10px;
    width : 400px;
  }
`;

export const ProjectContainer = styled.div`
	height: 73px;
	width: 88%;
	display: flex;
	flex-direction: row;
  align-items:center;
  
`;
export const RegularIcon = styled.img`
	height: 18px;
	width: 18px;
  
`;
export const ProjectName = styled.div`
	height: 22px;
	width: 140px;
	color: #ccd4dc;
	font-family: Raleway;
	font-size: 15px;
  line-height: 22px;
  padding-left:16px;
  padding-right:120px
`;

export const Devider = styled.div`
	height: 1px;
	width: 90%;
	background-color: #2a2b2e;
  display:flex;
  align-items:center;
`;
export const CreatedDate = styled.div`
	height: 95%;
	width: 73.9px;
  display:flex;
  align-items:center;
  word-break: break-all;
	opacity: 0.5;
	color: #ccd4dc;
	font-family: Raleway;
	font-size: 12px;
  line-height: 22px;
  text-overflow: clip;
`;
