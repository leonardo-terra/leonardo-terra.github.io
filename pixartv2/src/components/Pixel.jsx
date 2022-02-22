import React from "react";
import "../styles/pixelFormat.css";

class Pixel extends React.Component {
  render() {
    const { selectedColor } = this.props;
    return (
      <div className='cont'>
        <div className='pixel' style={{ backgroundColor: selectedColor }}></div>
      </div>
    );
  }
}
export default Pixel;
