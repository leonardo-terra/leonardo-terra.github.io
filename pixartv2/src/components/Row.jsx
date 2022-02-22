import React from "react";
import Pixel from "./Pixel";
import "../styles/row.css";

class Row extends React.Component {
  render() {
    const { panelWidth, selectedColor } = this.props;
    let pixels = [];
    for (let index = 0; index < panelWidth; index++) {
      pixels.push(<Pixel key={index} selectedColor={selectedColor} />);
    }

    return <div className='row'>{pixels}</div>;
  }
}

export default Row;
