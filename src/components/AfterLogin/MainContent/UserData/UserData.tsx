import React from 'react';
import UserProjects from './UserProjects/UserProjects';
import UserTasks from './UserTasks/UserTasks';

import { ContainerData, ContainerProjects, ContainerTasks } from './UserData.styled';


class UserData extends React.Component {
	state = {selectedProject:''}

	onSelectedProject = (projectName:string|undefined)=>{
		this.setState({selectedProject:projectName})
	}

	render(){
		return (
		<ContainerData>

			<ContainerProjects>
				<UserProjects onSelectedProject={this.onSelectedProject} />
			</ContainerProjects>

			<ContainerTasks>
			   <UserTasks projectName={this.state.selectedProject} />
			</ContainerTasks>
			
		</ContainerData>
	);
  }
}

export default UserData;
