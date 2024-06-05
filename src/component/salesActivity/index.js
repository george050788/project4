import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SalesActivity () {

  const series = [{
    name: 'Q1 Budget',
    group: 'budget',
    data: [18, 13, 15, 16, 12, 20, 15],

  }, {
    name: 'Q2 Budget',
    group: 'budget',
    data: [4, 6, 8, 8, 8, 4, 6,],

  },]

  const options = {
    colors: ['#ff3e1d', '#8592a3'],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '20%',
        distributed: false,

        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: "all",
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    stroke: {
      width: 2,
      lineCap: 'round',
      colors: ["#fff"],
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    fill: {
      opacity: 1
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        right: 0,
        bottom: 30,
        left: 0
      },
    },

    xaxis: {
      labels: {
        show: true,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '0.875rem',
        }
      },
      axisTicks: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
        'Jul'
      ],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: -13,
    }
  }





  return (
    <>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={302} width={448} />
      </div>
    </>
  )
}
