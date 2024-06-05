import React from 'react'
import ReactApexchart from 'react-apexcharts'
export default function ActivityArea () {
  const series = [{
    name: 'series1',
    data: [31, 50, 42, 91, 29, 79, 62]
  }]
  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        // autoSelected: "pan",
        show: false
      }
    },
    colors: ['#71DD37'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      // show: false,
      axisTicks: { show: false },
      labels: {
        show: false
      },
      axisBorder: {
        show: false,

      },
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
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
        <ReactApexchart options={options} series={series} type="area" width={250} height={140} />
      </div>
      <div id="html-dist"></div>
    </div>
  )

}
