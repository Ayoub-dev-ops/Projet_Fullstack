import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Technology used in this project",
      },
      data: [
        {
          indexLabel: "{label}: {y}%",
          startAngle: -90,
          dataPoints: [
            { y: 20, label: "React.js" },
            { y: 24, label: "Node.js" },
            { y: 20, label: "MongoDB" },
            { y: 14, label: "My brain" },
            { y: 12, label: "Some coffee" },
            { y: 10, label: "Nothing" },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default App;
