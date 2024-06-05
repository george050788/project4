import React from 'react'
import ReactApexChart from 'react-apexcharts'
import arrowstar from '../../image/arrow-star.png'

export default function SalesStats () {


  const series = [75]
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
          image: '../../image/china.png',
          imageWidth: 72,
          imageHeight: 53,
          offsetY: 80,
          offsetX: 50,
          imageClipped: true
        },
        dataLabels: {
          name: {
            show: true,
            offsetY: 55,
            color: 'rgba(50,71,92,0.38)'
          },
          value: {
            show: true,
            color: 'rgba(50,71,92,0.87)',
            offsetY: 15,
            fontSize: '2rem'
          }
        }
      }
    },

    fill: {
      colors: '#71dd37',
      type: 'soild',
    },
    stroke: {
      lineCap: 'round',

    },
    labels: ['Sales'],
    grid: {
      show: false,
      padding: {
        top: 30,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
  }



  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={349} width={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}

