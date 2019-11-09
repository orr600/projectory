import React from 'react';
import regularLogo from '../../../../../../../img/regular.svg';
import {
	ProjectContainer,
	RegularIcon,
	CreatedDate,
	Devider,
	ProjectName,
	ProjectWithDevider
} from './Project.styled';
import { Fragment } from 'react';

interface IProps {
	projectName:string|undefined;
	isLast:boolean;
	
	date:string
	onSelectedProject:(projName:string|undefined)=>void
}
interface IState {

}
	

class Project extends React.Component<IProps,IState> {

  
  divider = () =>{
	let divider 
	this.props.isLast===false ? divider= <Devider></Devider> : divider=<Fragment></Fragment>
	return divider
  }
  

  onClickProject=()=>{
      this.props.onSelectedProject(this.props.projectName)
  }

	render(){
		return (
		<ProjectWithDevider>
			<ProjectContainer onClick={this.onClickProject}>
				<RegularIcon src={regularLogo} alt="check-logo"></RegularIcon>
				<ProjectName>{this.props.projectName}</ProjectName>
				<CreatedDate>{this.props.date}</CreatedDate>
			</ProjectContainer>

			{this.divider()}
		</ProjectWithDevider>
	 )
	}
}

export default Project;
