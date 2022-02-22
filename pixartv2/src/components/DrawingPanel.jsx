import React from "react";
import Row from "./Row";
import "../styles/drawingPanel.css";

class DrawingPanel extends React.Component {
  render() {
    const { panelWidth, panelHeight, selectedColor } = this.props;
    let rows = [];
    for (let index = 0; index < panelHeight; index++) {
      rows.push(
        <Row
          key={index}
          panelWidth={panelWidth}
          selectedColor={selectedColor}
        />
      );
    }

    return (
      <div id='drawingPanel'>
        <div id='pixels'>{rows}</div>
      </div>
    );
  }
}

export default DrawingPanel;
