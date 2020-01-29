import * as React from "react";
import "./KPIStyles.css";
import KPIName from "./KPIName";
import KPINumber from "./KPINumber";
import "./KPIStyles.css";

class KPIElement extends React.Component {
  getdeltaParamater(possitive) {
    if (possitive === true) {
      return "PY";
    }
    return "PQ";
  }

  render() {
    const { name, description, value, possitive } = this.props.kpi;
    return (
      <div className="container">
        <div className="nameContainer">
          <KPIName styleName="KPI_Title" name={name} />
          <KPIName styleName="KPI_SubTitle" name={description} />
        </div>
        <div className="valueContainer">
          <KPINumber
            styleName="KPINumber"
            value={value}
            possitive={possitive}
          />
          <KPIName
            styleName="KPIDelta"
            name={this.getdeltaParamater(possitive)}
            possitive={possitive}
          />
        </div>
      </div>
    );
  }
}

export default KPIElement;
