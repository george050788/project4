import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ButtonGroup from '@mui/material/ButtonGroup'
import { IconButton } from '@mui/material'
import { EventDrawer } from '../../component'



export default function Calendar () {



  const [checked, setChecked] = useState([true, true, true, true, true])
  const [update, setUpdate] = useState(0)

  const handleChange1 = (event) => {
    let arr = new Array(5).fill(event.target.checked)
    setChecked([...arr])
    setUpdate(1)
  }

  const handleChange2 = (event, i) => {
    let array = checked
    array[i] = !array[i]
    setChecked([...array])
  }

  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const monthArr = ['January', 'Febuary', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
  // let month = 2
  // let year = 2024
  let date = new Date(year, month, 1)
  let week = date.getDay()
  let lastMonth = new Date(year, month, 0).getDate()
  const beforeArr = []
  for (let i = 0; i < week; i++) {
    beforeArr.unshift(lastMonth)
    lastMonth--
  }
  let lastday = new Date(year, month + 1, 0)
  let days = lastday.getDate()
  let day = lastday.getDay()
  const dayArr = []
  for (let i = 1; i <= days; i++) {
    dayArr.push(i)
  }
  console.log(date, 'week:', week, 'days:', days)
  const nextMonth = []
  for (let i = 1; i < 7 - day; i++) {
    nextMonth.push(i)
  }

  const tolastmonth = () => {
    setMonth(month - 1)
    // let newMonth = month
    console.log(month)

  }

  const tonextmonth = () => {
    setMonth(month + 1)
    // let newMonth = month
    console.log(month)

  }


  return (
    <>
      <div className='content'>
        <div className='calendar' style={{ display: 'flex', borderRadius: '6px' }}>
          <div className='calendar-left' style={{ width: '300px', backgroundColor: '#fff' }}>
            <div className='header-button' style={{ padding: '1.4rem 1.5rem' }}>
              {/* <Button
                variant="contained"
                sx={{ width: '100%', backgroundColor: '#696CFF' }}
                onClick={toggleDrawer('right', true)}
              >
                +  ADD EVENT</Button> */}
              <EventDrawer />
            </div>
            <Divider />
            <div className='chart'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
            <Divider />
            <div className='filter' style={{ padding: '0 1.5rem' }}>
              <h5 style={{ margin: '1.75rem 0 1rem' }}>FILTER</h5>
              <FormControlLabel
                label="View All"
                control={
                  <Checkbox
                    checked={checked.includes(false) ? false : true}
                    onChange={handleChange1}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />
                }
                sx={{ color: 'rgba(50,71,92,0.6)' }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel
                  label="Personal"
                  control={<Checkbox
                    checked={checked[0]}
                    onChange={(event) => { handleChange2(event, 0) }}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />}
                  sx={{ color: 'rgba(50,71,92,0.6)' }}
                />
                <FormControlLabel
                  label="Business"
                  control={<Checkbox
                    checked={checked[1]}
                    onChange={(event) => { handleChange2(event, 1) }}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />}
                  sx={{ color: 'rgba(50,71,92,0.6)' }}
                />
                <FormControlLabel
                  label="Family"
                  control={<Checkbox
                    checked={checked[2]}
                    onChange={(event) => { handleChange2(event, 2) }}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />}
                  sx={{ color: 'rgba(50,71,92,0.6)' }}
                />
                <FormControlLabel
                  label="Holiday"
                  control={<Checkbox
                    checked={checked[3]}
                    onChange={(event) => { handleChange2(event, 3) }}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />}
                  sx={{ color: 'rgba(50,71,92,0.6)' }}
                />
                <FormControlLabel
                  label="ETC"
                  control={<Checkbox
                    checked={checked[4]}
                    onChange={(event) => { handleChange2(event, 4) }}
                    sx={{ borderRadius: '8px', color: 'rgba(50,71,92,0.6)' }}
                  />}
                  sx={{ color: 'rgba(50,71,92,0.6)' }}
                />
              </Box>
            </div>



          </div>

          <div className='calendar-right' style={{ padding: '1.5rem 1.25rem', width: '1140px', backgroundColor: '#fff' }}>
            <div className='switch-button' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton aria-label="delete"
                  onClick={tolastmonth}
                >
                  <ArrowBackIosIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete"
                  onClick={tonextmonth}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
                <p>{monthArr[month]} {year}</p>
              </div>
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>Month</Button>
                <Button>Week</Button>
                <Button>Day</Button>
                <Button>List</Button>
              </ButtonGroup>
            </div>
            <Divider />
            <div className='week'>
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </div>
            <Divider />
            <div className='before'></div>
            <div className='day'>
              {beforeArr.map((number, i) => <span key={i}>{number}</span>)}
              {dayArr.map((number, i) => <p key={i}>{number}</p>)}
              {nextMonth.map((number, i) => <span key={i}>{number}</span>)}
            </div>
            <div className='after'></div>


          </div>


        </div>

      </div>

    </>
  )
}
