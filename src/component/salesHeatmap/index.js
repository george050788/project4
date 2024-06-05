import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SalesHeatmap () {

  function generateData (count, yrange) {
    var i = 0
    var series = []
    while (i < count) {
      var x = (i + 1).toString()
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      series.push({
        x: x,
        y: y
      })
      i++
    }
    return series
  }

  const series = [{
    name: '1k',
    data: generateData(8, {
      min: 250,
      max: 850
    })
  },
  {
    name: '2k',
    data: generateData(8, {
      min: 750,
      max: 2000
    })
  },
  {
    name: '3k',
    data: generateData(8, {
      min: 300,
      max: 4000
    })
  },
  {
    name: '4k',
    data: generateData(8, {
      min: 300,
      max: 4000
    })
  },
  {
    name: '5k',
    data: generateData(8, {
      min: 800,
      max: 4000
    })
  },
  {
    name: '6k',
    data: generateData(8, {
      min: 500,
      max: 4000
    })
  },
  {
    name: '7k',
    data: generateData(8, {
      min: 500,
      max: 4000
    })
  },
  {
    name: '8k',
    data: generateData(8, {
      min: 250,
      max: 1000
    })
  }
  ]
  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '0.875rem',
        },
        offsetX: 0,
        categories: ['1k', '2k', '3k', '4k', '5k', '6k',
          '7k', '8k'
        ],
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: 'rgba(50,71,92,0.38)',
          fontSize: '0.875rem',
        }
      },
      axisTicks: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
        'Jul', 'Aug'
      ],
    },
    colors: ["#696CFF"],

    legend: {
      show: false
    }
  }








  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="heatmap" height={370} width={448} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}

