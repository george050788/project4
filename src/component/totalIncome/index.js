import React from 'react'
import ReactApexChart from 'react-apexcharts'


export default function TotalIncome () {
  const series = [{
    name: 'Income',
    data: [3300, 3300, 4800, 4800, 3000, 3000, 1800, 1800, 3800, 3800, 5800, 5800]
  }]
  const options = {
    colors: ['#696cff'],
    chart: {
      type: 'area',

      stacked: false,
      height: 315,
      dropShadow: {
        enabled: true,
        color: '#696cff',
        top: 10,
        left: 5,
        blur: 5,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '0.875rem',
        },
        offsetX: 0,
        formatter: function (val) {
          return '$' + (val / 1000) + 'k'
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    xaxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '0.875rem',
          colors: 'rgba(50,71,92,0.38)'
        }
      },
      type: 'month',
      axisTicks: { show: false },
      categories: ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    // title: {
    //   show: false,
    //   text: 'Irregular Data in Time Series',
    //   align: 'left',
    //   offsetX: 14
    // },
    tooltip: {
      shared: true
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'right',
      offsetX: -10
    }
  }
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={290} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
