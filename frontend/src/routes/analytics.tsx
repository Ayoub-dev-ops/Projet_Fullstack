import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const analytics = () => {
  const data = [
    { name: "React.js", value: 30 },
    { name: "Node.js", value: 20 },
    { name: "MongoDB", value: 20 },
    { name: "Express.js", value: 15 },
    { name: "HTML", value: 10 },
    { name: "CSS", value: 5 },
  ];

  return (
    <div>
      <h1>Technologies utilisées dans mes projets :</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default analytics;
