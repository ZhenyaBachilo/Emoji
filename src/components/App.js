import React from 'react';
import '../App.css';
import { Form } from './Form';
import {EmojiCOntainer} from './EmojiCOntainer'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value:""
    }
  }
  updateData = (val)=>{
    this.setState({
      value: val
    })
  }
    
  render(){
    

    return (
      <>
        <Form value={this.props.value} updateData={this.updateData} />
        <EmojiCOntainer value={this.state.value} />
      </>
    )
  }

}


export default App;
