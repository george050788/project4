import React from 'react'
import ReactApexchart from 'react-apexcharts'




export default function CustomerRating () {
  const series = [{
    name: 'series1',
    data: [31, 50, 42, 71, 59, 62, 48, 75]
  }, {
    name: 'series2',
    data: [31, 60, 32, 51, 29, 35, 28, 33]
  }]
  const options = {
    chart: {
      height: 130,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#696cff',
        top: 10,
        left: 5,
        blur: 5,
        opacity: 0.2
      },
      toolbar: {
        // autoSelected: "pan",
        show: false
      }
    },
    colors: ['#696cff', '#32475c29'
    ],
    dataLabels: {
      enabled: false
    },
    markers: {
      strokeWidth: 5,
      strokeOpacity: 0.9,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 7,
        size: 7,
        fillColor: '#fff',
        strokeColor: '#696cff',
      }, {
        seriesIndex: 0,
        dataPointIndex: 3,
        size: 7,
        fillColor: '#fff',
        strokeColor: 'rgb(50,71,92)',
      }]
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 10],
      width: [5, 2]
    },
    xaxis: {
      show: true,
      axisTicks: { show: false },
      categories: ['', "Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        show: true,
        offsetY: -15,
        offsetX: -2,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '1rem',
        }
      },
      axisBorder: {
        show: false,
        offsetY: 25,
      },
    },
    legend: {
      show: false
    },

    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        right: -3,
        bottom: -10,
        left: -5
      },
    }
  }


  return (
    <div>
      <div id="chart">
        <ReactApexchart options={options} series={series} type="line" width={448} height={206} />
      </div>
      <div id="html-dist"></div>
    </div >
  )
}
