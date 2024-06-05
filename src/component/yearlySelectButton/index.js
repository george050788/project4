import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function YearlySelectButton () {

  const [year, setYear] = useState('')

  const handleChange = (event) => {
    setYear(event.target.value)
  }


  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 85, height: '32px' }}>
        <Select
          value={year}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ height: '32px', fontSize: '0.8125rem', lineHeight: '32px', color: 'rgb(105,108,255)' }}
        >
          <MenuItem value="">
            2024
          </MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl >


    </>
  )
}
