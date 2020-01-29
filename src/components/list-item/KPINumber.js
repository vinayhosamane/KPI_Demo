import * as React from "react";
import "./KPIStyles.css";

export default class KPINumber extends React.Component {
  render() {
    const { styleName, value, possitive } = this.props;
    let dynamicStyles;
    if (possitive === false) {
      dynamicStyles = {
        color: "red"
      };
    }
    return (
      <div>
        <p className={styleName} style={dynamicStyles}>
          {" "}
          {value}{" "}
        </p>
      </div>
    );
  }
}
