import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import dayjs from 'dayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateField } from '@mui/x-date-pickers/DateField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function EventDrawer () {
  const formRef = useRef()


  const add = () => {
    const startdate = { ...formvalue, startDate: value1 }
    const enddate = { ...formvalue, endDate: value }
    setFormValue({ ...formvalue, startDate: value1, endDate: value })
    console.log('title', formvalue)
  }
  const [value, setValue] = React.useState(dayjs('2024-03-14'))
  const [value1, setValue1] = React.useState(dayjs('2024-03-14'))
  const [timevalue, setTimeValue] = useState(dayjs('2024-03-14T09:02'))
  const [timevalue1, setTimeValue1] = useState(dayjs('2024-03-14T09:02'))
  const [allday, setAllday] = useState(true)
  const [formvalue, setFormValue] = useState({
    title: '',
    calendar: '',
    startDate: '',
    endDate: '',
    url: '',
    guests: '',
    description: ''
  })
  const [state, setState] = React.useState({
    right: false,
  })
  const [showStart, setShowStart] = useState(false)
  const [showEnd, setShowEnd] = useState(false)
  const openstart = () => {
    setShowStart(!showStart)
  }
  const openEnd = () => {
    setShowEnd(!showEnd)
  }

  const alldayswitcher = () => {
    setAllday(!allday)
    console.log('allday:', allday)

  }

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 38,
    height: 18,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }))

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const [calendar, setCalendar] = React.useState('')

  const handleChange = (event) => {
    setCalendar(event.target.value)
    setFormValue({ ...formvalue, calendar: event.target.value })
  }

  const [guests, setguests] = React.useState('')

  const handleChange1 = (event) => {
    setguests(event.target.value)
    setFormValue({ ...formvalue, guests: event.target.value })
  }

  const theme = createTheme({
    palette: {
      error: {
        main: '#8592A3',
      },
    }
  })




  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 383 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 1.5rem 0.75rem' }}>
        <h2 style={{ fontSize: '1.125rem', color: 'rgba(50,71,92,0.87)' }}>Add Event</h2>
        <IconButton aria-label="delete"
          onClick={toggleDrawer(anchor, false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <Divider />

      <div style={{ padding: '1rem 1.5rem 1.25rem' }}>
        {/* <form action="" ref={formRef}> */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { mb: '1.5rem', width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={(e) => { setFormValue({ ...formvalue, title: e.target.value }) }} id="outlined-basic" label="Title" variant="outlined" />
        </Box>
        {/* </form> */}
        <Box sx={{ minWidth: 120, mb: '1.5rem' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" name='calendar'>Calendar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={calendar}
              label="Calendar"
              onChange={handleChange}
            >
              <MenuItem value='Personal'>Personal</MenuItem>
              <MenuItem value='Business'>Business</MenuItem>
              <MenuItem value='Family'>Family</MenuItem>
              <MenuItem value='Holiday'>Holiday</MenuItem>
              <MenuItem value='ETC'>ETC</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className={!allday ? 'start-date' : 'start-date switch'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField', 'DateField']} sx={{ mb: '1.5rem', position: 'relative' }}>
              <DateField sx={{ width: '100%' }}
                label="Start Date"
                value={value1}
                onChange={(newValue) => setValue1(newValue)}
                onClick={openstart}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={showStart ? 'DateCalendar active' : 'DateCalendar'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value1} onChange={(newValue) => setValue1(newValue)} />
          </LocalizationProvider>
        </div>
        <div className={allday ? 'datetime-start' : 'datetime-start switch'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']} sx={{ mb: '1.5rem' }}>
              <DateTimePicker
                label="Start Date"
                value={timevalue}
                onChange={(newValue) => setTimeValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={!allday ? 'start-date' : 'start-date switch'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField', 'DateField']} sx={{ mb: '1.5rem' }}>
              <DateField sx={{ width: '100%' }}
                label="End Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onClick={openEnd}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={showEnd ? 'EndCalendar active' : 'EndCalendar'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
          </LocalizationProvider>
        </div>
        <div className={allday ? 'datetime-start' : 'datetime-start switch'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']} sx={{ mb: '1.5rem' }}>
              <DateTimePicker
                label="End Date"
                value={timevalue1}
                onChange={(newValue) => setTimeValue1(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label="All Day"
          onClick={alldayswitcher}
        />
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: '1.5rem 0', width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={(e) => { setFormValue({ ...formvalue, url: e.target.value }) }} id="outlined-basic" label="Event URL" variant="outlined" />
        </Box>
        <Box sx={{ minWidth: 120, mb: '1.5rem' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Guests</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={guests}
              label="Guests"
              onChange={handleChange1}
            >
              <MenuItem value='Bruce'>Bruce</MenuItem>
              <MenuItem value='Clark'>Clark</MenuItem>
              <MenuItem value='Diana'>Diana</MenuItem>
              <MenuItem value='John'>John</MenuItem>
              <MenuItem value='Barry'>Barry</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { mb: '1rem', width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Description" variant="outlined"
            multiline
            rows={4}
            onChange={(e) => { setFormValue({ ...formvalue, description: e.target.value }) }}
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained" sx={{ backgroundColor: '#696CFF' }} onClick={add}>ADD</Button>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color='error' >RESET</Button>
          </ThemeProvider>
        </Stack>
      </div>

    </Box >
  )




  return (
    <>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              variant="contained"
              sx={{ width: '100%', backgroundColor: '#696CFF' }}
              onClick={toggleDrawer(anchor, true)}
            >
              +  ADD EVENT</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>


    </>
  )
}
