import React from 'react'
import ReactApexChart from 'react-apexcharts'


export default function RevenueBar () {

  const series = [78]
  const options = {
    chart: {
      height: 300,
      type: 'radialBar',
      offsetY: -10,
      background: '#fff',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            fontSize: '18px',
            color: '#32475C99',
            offsetY: 20
          },
          value: {
            offsetY: -20,
            fontSize: '32px',
            color: undefined,
            formatter: function (val) {
              return val + "%"
            }
          }
        }
      }
    },
    colors: ['#696CFF'],
    fill: {

      type: 'gradient',
      gradient: {
        shade: 'dark',
        // type: 'horizontal',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [0, 50]
      },
    },
    stroke: {
      dashArray: 6
    },
    labels: ['Growth'],
  }






  return (
    <>
      <div id='chart'>
        <ReactApexChart options={options} series={series} type="radialBar" height={290} />
      </div>
    </>
  )
}
