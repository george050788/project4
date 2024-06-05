import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function IncomeRadial () {

  const series = [65]
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    colors: ['#696CFF'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ['6.5k'],

  }

  return (
    <>
      <div id='chart'>
        <ReactApexChart options={options} series={series} type="radialBar" height={100} />
      </div>
    </>
  )
}
