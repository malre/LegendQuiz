import React from "react";
import {
  MeasurementLayer,
  calculateDistance,
  calculateArea
} from "react-measurements";
import myImage7 from "../../AnimImg/img/img/CIMG346- (10).JPG";

class Measurment extends React.Component {
  state = { measurements: [] };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          backgroundColor: "#1a1a1a",
          fontFamily: "sans-serif"
        }}
      >
      <img src={myImage7} alt=" "/>
        <MeasurementLayer
          measurements={this.state.measurements}
          widthInPx={300}
          heightInPx={300}
          onChange={this.onChange}
          measureLine={this.measureLine}
          measureCircle={this.measureCircle}
        />
      </div>
    );
  }

  onChange = measurements => this.setState({ ...this.state, measurements });

  measureLine = line => Math.round(calculateDistance(line, 100, 100)) + " mm";

  measureCircle = circle =>
    Math.round(calculateArea(circle, 100, 100)) + " mm²";
}
export default Measurment;