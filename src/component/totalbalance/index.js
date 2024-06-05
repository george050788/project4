import React from 'react'
import ReactApexchart from 'react-apexcharts'

export default function TotalBalance () {
  const series = [{
    name: 'series1',
    data: [31, 50, 42, 71, 59, 89]
  }]
  const options = {
    chart: {
      height: 130,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#ffab00',
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
    colors: ['#FFAB00'],
    dataLabels: {
      enabled: false
    },
    markers: {
      strokeWidth: 5,
      strokeOpacity: 0.9,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 5,
        size: 7,
        fillColor: '#fff',
        strokeColor: '#FFAB00',
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      show: true,
      axisTicks: { show: false },
      categories: ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        show: true,
        offsetY: -20,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '1rem',
        }
      },
      axisBorder: {
        show: true,
        offsetY: 25,
      },
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
        top: -40,
        right: 0,
        bottom: -10,
        left: 0
      },
    }
  }








  return (
    <div>
      <div id="chart">
        <ReactApexchart options={options} series={series} type="line" width={400} height={217} />
      </div>
      <div id="html-dist"></div>
    </div >
  )

}
