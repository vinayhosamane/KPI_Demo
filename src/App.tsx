import * as React from "react";
import "./styles.css";
import KPIElement from "./components/list-item/KPIElement";
import kpis from "./testData";

export default function App() {
  return (
    <div>
      {kpis.map(function(item) {
        return [
          <KPIElement kpi={item} />,
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 1
            }}
          />
        ];
      })}
    </div>
  );
}
