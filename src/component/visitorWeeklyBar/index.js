import React from 'react'
import ReactApexChart from 'react-apexcharts'





export default function VistorWeeklyBar () {

  const series = [{
    name: 'Vistor',
    data: [20, 55, 48, 26, 35, 77, 50]
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 140,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        endingShape: 'rounded',
        borderRadius: 7,
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
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: {
        show: false
      },

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
        <ReactApexChart options={options} series={series} type="bar" height={140} width={250} />
      </div>




    </>
  )
}






