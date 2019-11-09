import React from 'react';
import {} from './ProjectList.styled';
import { number } from 'prop-types';
import Project from './Project/Project'

interface IProps {
	onSelectedProject:(projName:string|undefined)=>void
	arr?: any[];
	
}

interface IState {
	
}

class ProjectList extends React.Component<IProps,IState>{
	 arr = [0, 1, 2, 3,5,4,5,5,5,5];

	 buildList = (arr: any[])=> {
		let newArr: any[] = arr.map((elm: any,ind:Number) => {
      let isLast:boolean
      ind===arr.length-1 ? isLast=true : isLast=false
			return <Project projectName="dd" date="ffffff" isLast={isLast} onSelectedProject={this.props.onSelectedProject}/>;
		});
		return newArr;
	};
	render(){
		return <>{this.props.arr}</>;
	}
	
}

export default ProjectList;
