import React from 'react'
import ReactApexChart from 'react-apexcharts'



export default function TotalRevenue () {


  const series = [{
    name: '2023',
    data: [18, 7, 15, 29, 18, 12, 9],

  }, {
    name: '2022',
    data: [-13, -18, -9, -14, -5, -17, -15],

  },]

  const options = {
    colors: ['#696CFF', '#03C3EC'],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '20%',
        distributed: false,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: "all",
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    stroke: {
      width: 3,
      lineCap: 'round',
      colors: ["transparent"],
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    fill: {
      opacity: 1
    },

    xaxis: {
      labels: {
        style: {
          colors: ['#32475CDE']
        }
      },
      axisTicks: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
        'Jul'
      ],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: -13,
    }
  }





  return (
    <>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={312} />
      </div>



    </>
  )
}
