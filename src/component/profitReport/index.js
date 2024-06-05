import React from 'react'
import ReactApexchart from 'react-apexcharts'


export default function ProfitReport () {



  const series = [{
    name: 'series1',
    data: [31, 100, 42, 71, 59, 109, 112]
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
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      show: false,
      axisTicks: { show: false },
      labels: {
        show: false
      },
      axisBorder: {
        show: false,

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
    }
  }








  return (
    <div>
      <div id="chart">
        <ReactApexchart options={options} series={series} type="line" width={258} height={131} />
      </div>
      <div id="html-dist"></div>
    </div >
  )

}

