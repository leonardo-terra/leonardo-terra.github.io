import React from "react";
import "../styles/editor.css";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      panelWidth: 10,
      panelHeight: 10,
      selectedColor: "",
    };
  }

  handleWidth = ({ target }) => {
    this.setState({
      panelWidth: target.value,
    });
  };

  handleHeight = ({ target }) => {
    this.setState({
      panelHeight: target.value,
    });
  };

  handleClick = () => {
    console.log("clicou");
  };

  changeColor = (color) => {
    this.setState({
      selectedColor: color.hex,
    });
  };

  render() {
    const { panelWidth, panelHeight, selectedColor } = this.state;
    return (
      <div className='container'>
        <h1>Pixel Editor</h1>

        <div className='inputController'>
          <input
            className='panelInput'
            type='number'
            onChange={this.handleWidth}
            defaultValue={panelWidth}
          />
          <input
            className='panelInput'
            type='number'
            onChange={this.handleHeight}
            defaultValue={panelHeight}
          />
        </div>

        <button className='startButton' onClick={this.handleClick}>
          PixelArt!
        </button>
        <CirclePicker onChangeComplete={this.changeColor} />
        <br />
        <DrawingPanel
          panelWidth={panelWidth}
          panelHeight={panelHeight}
          selectedColor={selectedColor}
        />
      </div>
    );
  }
}

export default Editor;
