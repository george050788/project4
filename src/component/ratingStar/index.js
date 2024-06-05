import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'

export default function RatingStar () {

  const labels = {
    0.5: '0.5',
    1: '1.0',
    1.5: '1.5',
    2: '2.0',
    2.5: '2.5',
    3: '3.0',
    3.5: '3.5',
    4: '4.0',
    4.5: '4.5',
    5: '5.0',
  }

  function getLabelText (value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
  }

  const [value, setValue] = useState(4)
  const [hover, setHover] = useState(-1)



  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {value !== null && (
        <Box sx={{ mr: 2, fontSize: '3rem', color: 'rgba(50,71,92,0.87)' }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

    </Box>
  )
}
