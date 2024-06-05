import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function EarningReport () {

  const series = [{
    name: 'Earning',
    data: [25, 80, 48, 30, 70, 35, 50]
  }]

  const data = series.data
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
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 5,
        colors: {
          color: 'rgba(50,71,92,0.1)'
        }
      },
    },
    colors: ['#696CFF'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: {
        show: false
      },
      labels: {
        show: true,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '0.875rem',
        }
      },

    },
    yaxis: {

      show: false,
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {

      opacity: 0.8
    },
    tooltip: {

      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        right: 0,
        bottom: -10,
        left: 0
      },
    }
  }

  return (
    <>

      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={157} width={400} />
      </div>




    </>
  )
}
