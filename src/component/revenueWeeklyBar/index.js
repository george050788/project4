import React from 'react'
import ReactApexChart from 'react-apexcharts'




export default function RevenueWeeklyBar () {

  const series = [{
    name: 'Revenue',
    data: [21, 55, 48, 26, 65, 37, 50]
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 110,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        colors: {
          color: 'rgba(50,71,92,0.1)'
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
    },
    yaxis: {

      show: false,
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {

      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    grid: {
      show: false
    }
  }

  return (
    <>

      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={110} />
      </div>




    </>
  )
}
