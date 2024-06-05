import React from 'react'
import ReactApexChart from 'react-apexcharts'


export default function Sessions () {
  const series = [{
    name: 'Income',
    data: [3300, 3300, 2800, 2800, 2000, 2000, 3400, 3400, 4800]
  }]
  const options = {
    colors: ['#ffab00'],
    chart: {
      type: 'area',

      stacked: false,
      height: 315,
      dropShadow: {
        enabled: true,
        color: '#ffab00',
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
      },
      // sparkline: {
      //   enabled: true
      // }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight',
    },
    markers: {
      strokeWidth: 4,
      strokeOpacity: 0.9,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 8,
        size: 7,
        fillColor: '#fff',
        strokeColor: '#ffab00',
      }]
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
      show: false,
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
      show: false,
      labels: {
        show: false,
        style: {
          fontSize: '0.875rem',
          colors: 'rgba(50,71,92,0.38)'
        }
      },
      type: 'month',
      axisTicks: { show: false },
      categories: ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
        offsetY: 25,
      },
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
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        right: 15,
        bottom: -10,
        left: -5
      },
    }
  }
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={110} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
