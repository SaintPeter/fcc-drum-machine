import React from 'react';
import DrumPad from "./DrumPad";

class Drums extends React.Component {

  constructor() {
    super();
    this.state = {
      displayText: ""
    }
    
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  
  updateDisplay(newText) {
    this.setState({displayText: newText});
  }
  
  render(props) {
    return <div id="drum-machine">
      <div id="display">{this.state.displayText}&nbsp;</div>
      {
        this.props.list.map((drum) => {
          return <DrumPad key={drum.key} data={drum} display={this.updateDisplay}/>
        })
      }
    </div> 
  }
}

export default Drums;