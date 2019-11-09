import React from 'react';
import regularLogo from '../../../../../../img/regular.svg';
import {
	ProjectContainer,
	RegularIcon,
	CreatedDate,
	Devider,
	ProjectNameInput,
	ProjectWithDevider
} from './NewProjectTemplate.styled';
import { Fragment } from 'react';

interface IProps {
     createNewProject: (valueName:string | undefined)=>void
     cancelNewProject: ()=>void
}

interface IState {
    valueName?: string;
    wrapperRef?: any
  
}

class NewProjectTemplate extends React.Component<IProps, IState> {
    private myRef= React.createRef<HTMLDivElement>()
	constructor(props: IProps) {
        super(props);
        
        
        this.state= {valueName:'', wrapperRef:''}
    }
    componentWillMount=()=>{
        document.addEventListener('mousedown',this.handleClickOutside)

    }
    componentWillUnmount=()=>{
        document.removeEventListener('mousedown',this.handleClickOutside)

    }
    handleClickOutside=(e:any)=>{
      

    }
    setWrapperRef= (node:any)=>{
      this.myRef=node
    }
    onPressEnter= (e:any)=>{
       if(e.keyCode===13){
            this.props.createNewProject(this.state.valueName)

       }

    }

	render(){
        return (
		<ProjectWithDevider >
			<ProjectContainer onBlur={this.props.cancelNewProject} tabIndex={1}>
				<RegularIcon src={regularLogo} alt="check-logo"></RegularIcon>
                <ProjectNameInput type="text" value={this.state.valueName} 
                onChange={(e)=>{this.setState({valueName:e.target.value})}} onKeyDown={this.onPressEnter}
                placeholder="Type Project Name Here"></ProjectNameInput>
				<CreatedDate>Today</CreatedDate>
			</ProjectContainer>

			<Devider></Devider>
		</ProjectWithDevider>
    );
        }
}

export default NewProjectTemplate;