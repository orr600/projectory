import React from 'react';
import plusLogo from '../../../../../img/add_new_project.svg';
import ProjectList from './ProjectList/ProjectList'
import NewProjectTemplate from './NewProjectTemplate/NewProjectTemplate'

import {
	ContainerProject,
	ContainerText,
	TextMyProject,
	DivNewProject,
	TextNewProject,
	PlusIcon,
	ProjectListCss
} from './UserProjects.styled';
import Project from './ProjectList/Project/Project'

interface IProps {
	onSelectedProject:(projName:string|undefined)=>void
	
}

interface IState {
	projectsArr?: any[];
}

class UserProjects extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	
	this.state= {projectsArr: []}
	}

	onClickNewProject = ()=>{
	let newArr = [<NewProjectTemplate cancelNewProject={this.cancelNewProject} createNewProject={this.createNewProject}/>,...this.state.projectsArr]
       this.setState({projectsArr: newArr})

	}
	createNewProject= (valueName:string|undefined)=>{
		let newArr = [...this.state.projectsArr]
		newArr.shift()
		newArr.unshift(<Project projectName={valueName} date="today" isLast={false} onSelectedProject={this.props.onSelectedProject}/>)
	    this.setState({projectsArr:newArr})
	}
	cancelNewProject= ()=>{
		let newArr = [...this.state.projectsArr]
		newArr.shift()
	    this.setState({projectsArr:newArr})
	}
	render(){
		return (
			<ContainerProject>
				<ContainerText>
					<TextMyProject>My Projects</TextMyProject>
	
					<DivNewProject>
						<TextNewProject>New Project</TextNewProject>
						<PlusIcon src={plusLogo} alt="plus-logo" onClick={this.onClickNewProject}></PlusIcon>
					</DivNewProject>
				</ContainerText>
	
				<ProjectListCss>
					<ProjectList arr={this.state.projectsArr} onSelectedProject={this.props.onSelectedProject} />
				</ProjectListCss>
			</ContainerProject>
		)
	}
	
}

export default UserProjects;
