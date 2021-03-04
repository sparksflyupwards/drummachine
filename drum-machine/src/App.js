import './App.css';
import React from 'react';
import Helmet from 'react-helmet';
import DrumPad from './components/DrumPad/DrumPad'


import drum1 from './media/drum-one/drum1.wav';
import drum2 from './media/drum-one/drum2.wav';
import drum3 from './media/drum-one/drum3.wav';
import drum4 from './media/drum-one/drum4.wav';
import drum5 from './media/drum-one/drum5.wav';
import drum6 from './media/drum-one/drum6.wav';
import drum7 from './media/drum-one/drum7.wav';
import drum8 from './media/drum-one/drum8.wav';
import drum9 from './media/drum-one/drum9.wav';



let AppTitle = ()=>{
  const style = {}
  return(<div id="title">DRUM PAD</div>)
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);


    this.state = {
      sound_playing: "",
    }
    
  }

  componentDidMount(){
    document.addEventListener("keypress", this.handleKeyPress.bind(this))
  }


  handleKeyPress = (event) => {
    let keypressed = event.key;

    if(keypressed.toUpperCase() == keypressed){
      keypressed = keypressed.toLowerCase();
    }
    switch(keypressed){
      case "q":
        this.playSound("Q");
        break;
      case "w":
        this.playSound("W");
        break;
      case "e":
        this.playSound("E");
        break;
      case "a":
        this.playSound("A");
        break;
      case "s":
        this.playSound("S");
        break;
      case "d":
        this.playSound("D");
        break;
      case "z":
        this.playSound("Z");
        break;
      case "x":
        this.playSound("X");
        break;
      case "c":
        this.playSound("C");
        break;

    }
  }  
  playSound(soundName){
    let sound_playing = "";
    switch(soundName){
      case "Q":
        sound_playing = "drum1";
        break;
      case "W":
        sound_playing = "drum2";
        break;
      case "E":
        sound_playing = "drum3";
        break;
      case "A":
        sound_playing = "drum4";
        break;
      case "S":
        sound_playing = "drum5";
        break;
      case "D":
        sound_playing = "drum6";
        break;
      case "Z":
        sound_playing = "drum7";
        break;
      case "X":
        sound_playing = "drum8";
        break;
      case "C":
        sound_playing = "drum9";
        break;
      default:
        break;

    }

    this.setState({sound_playing: sound_playing});
    const audioEl = document.getElementById(soundName)

    if (audioEl.paused) {
      audioEl.play();
     }else{
      audioEl.currentTime = 0
    }
  }

  render(){
    return (
      <div className="App" id="drum-machine" onKeyDown={this.handleKeyPress} >
        <AppTitle/>
    
        <div id="display"> 

        
        
            <DrumPad playAudio={this.playSound} keystroke="Q" sound="drum1" soundFile={drum1}/>
            <DrumPad playAudio={this.playSound} keystroke="W" sound="drum2" soundFile={drum2}/>
            <DrumPad playAudio={this.playSound} keystroke="E" sound="drum3" soundFile={drum3}/>
            <DrumPad playAudio={this.playSound} keystroke="A" sound="drum4" soundFile={drum4}/>
            <DrumPad playAudio={this.playSound} keystroke="S" sound="drum5" soundFile={drum5}/>
            <DrumPad playAudio={this.playSound} keystroke="D" sound="drum6" soundFile={drum6}/>
            <DrumPad playAudio={this.playSound} keystroke="Z" sound="drum7" soundFile={drum7}/>
            <DrumPad playAudio={this.playSound} keystroke="X" sound="drum8" soundFile={drum8}/>
            <DrumPad playAudio={this.playSound} keystroke="C" sound="drum9" soundFile={drum9}/>
            {this.state.sound_playing != "" &&
            <div id="sound-choice-display">
              Currently Playing: {this.state.sound_playing}</div>
                }
        </div>
  
      

      <Helmet>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"/>
      </Helmet>
   </div>
    );
  }
   
 
}

export default App;
