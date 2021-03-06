import react from "react";
import './SoundChoiceDisplay.css'
let SoundChoiceDisplay = (props)=>{
   return(
        <div id="sound-choice-display">
        Currently Playing: {props.soundPlaying}</div>
   ) 
}

export default SoundChoiceDisplay;