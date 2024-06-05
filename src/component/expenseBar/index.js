import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function ExpenseBar () {
  const series = [{
    name: '2023',
    data: [8, 18, 7, 15, 25, 15, 12, 5, 9, 16],

  }, {
    name: '2022',
    data: [-18, -13, -18, -9, -14, -12, -13, -5, -20, -15],

  },]

  const options = {
    colors: ['#696CFF', '#ffab00'],
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
        borderRadius: 3,
        columnWidth: '30%',
        distributed: false,

        borderRadiusApplication: 'end',
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
      colors: ["transparent"],
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
        top: 10,
        right: 0,
        bottom: 10,
        left: 0
      },
    },

    xaxis: {
      labels: {
        style: {
          colors: ['#32475CDE']
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
        <ReactApexChart options={options} series={series} type="bar" height={190} width={270} />
      </div>



    </>
  )
}
