import React from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';
import soundFile2 from '../../media/drum-one/drum1.wav';

class DrumPad extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      sound: this.props.sound
    }
  }
  componentDidMount(){
  }
  render(){

    return(<div id={this.state.sound} className="drum-pad" onClick={()=> this.props.playAudio(this.props.keystroke)} >

    <audio className="clip" id={this.props.keystroke} src={this.props.soundFile}>
          <source src={this.props.soundFile}></source>
    </audio>

    <button onClick={()=> this.props.playAudio(this.props.keystroke)} className="drum-pad-button">
      {this.props.keystroke}</button>
  </div>);
  }
  
}


export default DrumPad;
