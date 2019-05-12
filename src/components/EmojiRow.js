import React from 'react';
import {emojiArr} from './EmojiArr'

export class EmojiRow extends React.Component{
    render(){
        let newArr =emojiArr.filter(item => item.title.toLowerCase().startsWith(this.props.value.toLowerCase() || item.keywords.split(' ').forEach(word=>word.toLowerCase().startsWith(this.props.value.toLowerCase()))));
        console.log(newArr);
        let FinalArr= newArr.map(thing =><li>{thing.symbol} {thing.title}</li>)
        return(FinalArr);
    }
   
}
