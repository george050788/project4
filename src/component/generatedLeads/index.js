import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function GeneratedLeads () {

  const series = [55, 45, 50, 50]
  const options = {
    chart: {

      animations: { enabled: false },
      type: 'donut',
    },
    colors: ['rgb(113,221,55)', 'rgba(113,221,55,0.8)', 'rgba(113,221,55,0.6)', 'rgba(113,221,55,0.38)',
    ],
    stroke: {
      width: 0,
      // lineCap: 'butt'
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

        startAngle: -100,
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
              fontSize: '0.875rem',
              color: 'rgba(50,71,92,0.6)',
              label: 'Average',
              formatter: () => '25%'
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
      type: 'solid',
      opacity: 1,
    },
    legend:
      { show: false },
    grid: {
      show: false,
      padding: {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15
      },
    }
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
        <ReactApexChart options={options} series={series} type="donut" width={150} height={165} />
      </div>

    </>
  )
}
