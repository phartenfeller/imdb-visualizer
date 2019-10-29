import React from 'react';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts';

const BarChart = ({ title, categories, data, dataCount, seriesName }) => {
  const series = [
    {
      name: seriesName,
      data: data,
    },
  ];

  const options = {
    xaxis: {
      categories,
    },
  };

  /*
  const options = {
    colors: ['ffffff'],
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        distributed: true,
        colors: {
          backgroundBarOpacity: 1,
        },
      },
    },
    dataLabels: {
      offsetY: -22,
      enabled: true,
      formatter: val => {
        return val > 0 ? Math.round((val / dataCount) * 100) + '%' : '';
      },
      style: {
        fontSize: '12px',
        colors: [CSS.creamYellow],
      },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: CSS.textGray,
          fontSize: '15px',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 100],
      },
    },
    title: {
      text: title,
      floating: true,
      align: 'center',
      style: {
        color: CSS.textLight,
        fontSize: '22px',
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    chart: {
      width: '100%',
      height: '100%',
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
  };
  */

  return (
    <ReactApexCharts
      options={options}
      series={series}
      type="bar"
      width="100%"
      height="350"
    />
  );
};

BarChart.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  data: PropTypes.array,
  dataCount: PropTypes.number,
  seriesName: PropTypes.string,
};

export default BarChart;
