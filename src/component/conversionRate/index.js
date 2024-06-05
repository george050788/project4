import React from 'react'
import ReactApexchart from 'react-apexcharts'



export default function ConversionRate () {
  const series = [{
    name: 'series1',
    data: [42, 81, 59, 109]
  }]
  const options = {
    chart: {
      // offsetX: -10,
      height: 130,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#696CFF',
        top: 10,
        left: 5,
        blur: 5,
        opacity: 0.2
      },
      toolbar: {
        // autoSelected: "pan",
        show: false
      },
      sparkline: {
        enabled: true,
      }
    },
    colors: ['#696CFF'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      show: false,
      axisTicks: { show: false },
      labels: {
        show: false
      },
      axisBorder: {
        show: false,

      },
    },
    markers: {
      strokeWidth: 5,
      strokeOpacity: 0.9,
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 3,
        size: 7,
        fillColor: '#fff',
        strokeColor: '#696CFF',

      }]
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    grid: {
      show: false,
    }
  }



  return (
    <div>
      <div id="chart">
        <ReactApexchart options={options} series={series} type="line" width={125} height={70} />
      </div>
      <div id="html-dist"></div>
    </div >
  )
}
