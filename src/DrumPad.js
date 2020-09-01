import React from 'react';

class DrumPad extends React.Component {
  constructor() {
    super();
    this.audioRef = React.createRef();
    this.padRef = React.createRef();
    
    this.state = {
      pulse: 0
    }
    
    this.playClip = this.playClip.bind(this);
    this.clearPulse = this.clearPulse.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this)
  }
  
  playClip() {
    this.clearPulse();
    
    // Force clip to restart every play
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.play();  
    
    // Update display
    this.props.display(this.props.data.desc);
    
    // Activate animation
    this.setState({pulse: 1});
  }
  
  clearPulse() {
    this.setState({pulse: 0}, function () {
      // Force redraw to cancel animation cycle
      void this.padRef.current.offsetWidth; 
    });
  }
  
  handleKeydown(e) {
    if(e.keyCode === this.props.data.key.charCodeAt(0) || 
       e.keyCode === this.props.data.key.toLowerCase().charCodeAt(0)) 
    {
      this.playClip();
      // Key is handled
      e.stopPropagation();
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown)
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  }

  render(props) {
    return <div 
      id={'key_' + this.props.data.key} 
      className="drum-pad" 
      onClick={this.playClip}
      onAnimationEnd={this.clearPulse}
      pulse={this.state.pulse}
      ref={this.padRef}
    >
      <p className="drum-key">{ this.props.data.key}</p>
      <audio 
        ref={this.audioRef}
        id={this.props.data.key}
        className="clip" 
        src={'sounds/' + this.props.data.file}
      />
    </div>
  }
}

export default DrumPad;