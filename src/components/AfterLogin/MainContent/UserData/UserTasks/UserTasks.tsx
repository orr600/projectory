import React from 'react';
import plusLogo from '../../../../../img/add_new_project.svg';

import {ContainerTask,ContainerText,ProjectName,TextNewTask,DivNewTask,PlusIcon,TaskListCss} from './UserTasks.styles';

interface IProps {
	projectName:string
}

interface IState {
	projectsArr?: any[];
}

class UserTasks extends React.Component<IProps,IState> {

	render(){
		return (
			<ContainerTask>
				<ContainerText>
					<ProjectName>{this.props.projectName}</ProjectName>
	
					<DivNewTask>
						<TextNewTask>New Task</TextNewTask>
						<PlusIcon src={plusLogo} alt="plus-logo"></PlusIcon>
					</DivNewTask>
				</ContainerText>
	
				<TaskListCss>{/* <TaskList/> */}</TaskListCss>
			</ContainerTask>
		);
	}
	
}

export default UserTasks;
