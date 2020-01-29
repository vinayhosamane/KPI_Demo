import * as React from "react";
import "./KPIStyles.css";
import { Html5Entities } from "html-entities";

export default class KPIName extends React.Component {
  render() {
    const { styleName, name } = this.props;
    let text;
    const entities = new Html5Entities();
    const delta = "&Delta;";
    if (styleName === "KPIDelta") {
      text = (
        <p className={styleName}>
          {" "}
          {entities.decode(delta)}
          {name}{" "}
        </p>
      );
    } else {
      text = <p className={styleName}>{name}</p>;
    }
    return text;
  }
}
