import React, { useEffect, useState, useRef } from "react";
import ReactEcharts from "echarts-for-react";

const PopulationPyramid = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  const data = [
    { ageGroup: "0-4", male: 17, female: 17 },
    { ageGroup: "5-9", male: 16, female: 16 },
    { ageGroup: "10-14", male: 15, female: 15 },
    { ageGroup: "15-19", male: 14, female: 14 },
    { ageGroup: "20-24", male: 13, female: 13 },
    { ageGroup: "25-29", male: 12, female: 12 },
    { ageGroup: "30-34", male: 11, female: 11 },
    { ageGroup: "35-39", male: 10, female: 10 },
    { ageGroup: "40-44", male: 9, female: 9 },
    { ageGroup: "45-49", male: 8, female: 8 },
    { ageGroup: "50-54", male: 7, female: 7 },
    { ageGroup: "55-59", male: 6, female: 6 },
    { ageGroup: "60-64", male: 5, female: 5 },
    { ageGroup: "65-69", male: 4, female: 4 },
    { ageGroup: "70-74", male: 3, female: 3 },
    { ageGroup: "75-79", male: 2, female: 2 },
    { ageGroup: "80+", male: 1, female: 1 },
  ];

  const option = {
    title: {
      text: "Population - Nepal (2023)",
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

  return <ReactEcharts option={option} style={{ height: "400px" }} />;
};

export default PopulationPyramid;
