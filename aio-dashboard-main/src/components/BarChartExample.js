import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChartExample = (props) => {
  const chartRef = useRef();
  const chartObj = useRef();

  const createBarChart = (el) => {
    const data = [
      { year: 'Jan', count: 10 },
      { year: 'Feb', count: 20 },
      { year: 'Mar', count: 15 },
      { year: 'Apr', count: 25 },
      { year: 'May', count: 22 },
      { year: 'Jun', count: 30 },
      { year: 'Jul', count: 28 },
      { year: 'Aug', count: 18 },
      { year: 'Sep', count: 22 },
      { year: 'Oct', count: 30 },
      { year: 'Nov', count: 28 },
      { year: 'Dec', count: 18 },
    ];

    chartObj.current = new Chart(el, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by Month",
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  };

  useEffect(() => {
    const el = chartRef.current;
    //const el = document.getElementById("chart");
    if (chartObj.current) chartObj.current.destroy();
    createBarChart(el);

    return () => chartObj.current.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChartExample;
