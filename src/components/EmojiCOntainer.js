import React from 'react';
import { EmojiRow } from './EmojiRow';

export class EmojiCOntainer extends React.Component{
    render(){
        if(this.props.value === ""){
            return null;
        }else{
            return(
                <ul>
                    <EmojiRow value={this.props.value} />  
                </ul>
            )
        }

    }
}