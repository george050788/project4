import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Progress () {





  const series = [64]
  const options = {
    chart: {
      height: 80,
      type: 'radialBar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
            offsetY: 55,
            color: 'rgba(50,71,92,0.38)'
          },
          value: {
            show: false,
            color: 'rgba(50,71,92,0.87)',
            offsetY: 15,
            fontSize: '2rem'
          }
        }
      }
    },

    fill: {
      colors: '#696CFF',
      type: 'soild',
    },
    stroke: {
      lineCap: 'round',

    },
    // labels: ['Sales'],
    // grid: {
    //   show: false,
    //   padding: {
    //     top: 30,
    //     right: 0,
    //     bottom: 0,
    //     left: 0
    //   },
    // },
  }



  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={80} width={82} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
