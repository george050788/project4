import React from 'react'
import ReactApexchart from 'react-apexcharts'




export default function IncomeAreaChart () {

  const series = [{
    name: 'series1',
    data: [24, 21, 30, 22, 42, 26, 35, 29]
  }]
  const options = {
    colors: ['#696cff'],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      offsetX: 60,
      type: 'month',
      axisTicks: { show: false },
      categories: ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      show: false,
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
      strokeDashArray: 5,
    }
  }








  return (
    <>
      <div>
        <div id="chart">
          <ReactApexchart options={options} series={series} type="area" width={448} height={222} />
        </div>
      </div>



    </>
  )
}
