import React from 'react'
import ReactApexchart from 'react-apexcharts'


export default function ProfitBar () {

  const series = [
    {
      name: 'Q1 Profit',
      group: 'budget',
      data: [78000, 50000, 80000, 160000]
    },

    {
      name: 'Q2 Profit',
      group: 'actual',
      data: [65000, 30000, 100000, 150000]
    },

  ]
  const options = {
    chart: {
      type: 'bar',
      height: 'auto',
      stacked: true,
      toolbar: {
        show: false
      },
      brush: {

        autoScaleYaxis: true
      },
      // offsetY: -40,
      // sparkline: {
      //   enabled: true
      // },
      parentHeightOffset: 0,
    },
    stroke: {
      width: 3,
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        dataLabels: {
          enabled: false
        }
      }
    },

    xaxis: {
      labels: {
        enabled: true,
        style: {
          colors: 'rgba(50,71,92,0.38)'
        }
      },
      axisTicks: { show: false },
      axisBorder: {
        show: false
      },
      categories: [
        'Jan',
        'Apr',
        'Jul',
        'Oct',
      ],
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: false,
      padding: {
        top: -40,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['#71dd37', '#71dd3733'],
    yaxis: {
      show: false,
      labels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        }

      }
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left'
    }
  }
  return (
    <div>
      <div id="chart">
        <ReactApexchart options={options} series={series} type="bar" height={110} width={200} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
