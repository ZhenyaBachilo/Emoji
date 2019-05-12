import React from 'react';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ""
        }
    }

    handleChange = (event)=>{
        this.props.updateData(event.target.value);
        this.setState({
            value: event.target.value  
        })
    }

    render(){
        return(
            <form>
                <label>Enter Emoji Name <input type='text' value={this.state.value} onChange={this.handleChange}></input></label>
            </form>
        )
    }
}