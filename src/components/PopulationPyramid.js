import React, { useEffect, useState, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "../assets/data";

const PopulationPyramid = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  const option = {
    title: {
      text: "Population - Nepal (2023)",
    },
    legend: {
      data: ["Male", "Female"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      data: data.map((item) => item.ageGroup),
    },
    series: [
      {
        name: "Male",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
          formatter: (params) => Math.abs(params.value), // Display positive values
        },
        data: data.map((item) => item.male),
        itemStyle: {
          color: "red",
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "Female",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
          position: "left",
          formatter: (params) => Math.abs(params.value), // Display positive values
        },
        emphasis: {
          focus: "series",
        },
        data: data.map((item) => -item.female),
        itemStyle: {
          color: "#007bff",
        },
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} style={{ height: "400px" }} />{" "}
      <p style={{ textAlign: "center" }}>Percentage of Population</p>
    </>
  );
};

export default PopulationPyramid;
