import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function OrderPie () {

  const series = [40, 45, 80, 20]
  const options = {
    chart: {

      animations: { enabled: false },
      type: 'donut',
    },
    colors: ['#03c3EC', '#71dd37', '#696CFF', '#8592a3',
    ],
    stroke: {
      width: 6
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },

    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 20,
            },
            value: {
              offsetY: -20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Weekly',
              formatter: () => '38%'
            }
          }
        }
      }
    },
    labels: ['Decor', 'Fashion', 'Electronic', 'Sports'],
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    legend:
      { show: false },
    // responsive: [{
    //   breakpoint: 480,
    //   options: {
    //     chart: {
    //       width: 200
    //     },

    //   }
    // }]
  }




  return (
    <>

      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" width={150} height={150} />
      </div>

    </>
  )
}
