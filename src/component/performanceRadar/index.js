import React from 'react'
import ReactApexChart from 'react-apexcharts'


export default function PerformanceRadar () {

  const series = [{
    name: 'Income',
    data: [60, 78, 80, 100, 78, 60],
  }, {
    name: 'Earning',
    data: [80, 70, 60, 60, 60, 100],
  }]

  const options = {
    chart: {
      height: 350,
      type: 'radar',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },

    colors: ['#696CFF', '#03C3EC'],
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.8
    },
    markers: {
      size: 0
    },
    yaxis: {
      show: false,
      stepSize: 20
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        enabled: true,
        style: {
          fontSize: '0.875rem',
          colors: 'rgba(50,71,92,0.38)'
        }
      },
    }

  }


  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radar" height={313} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
