import React, { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'


export default function ExpandHandler () {

  const [expand, setExpand] = useState(false)
  const handleClick = () => {
    setExpand(!expand)
    console.log('expand:', expand)
  }

  return (
    <ListItemButton sx={{
      minHeight: 48,

      px: 2.5,
      backgroundColor: 'rgba(105, 108,255,0.16)',
      margin: '0px 1rem',
      borderRadius: '6px',
      padding: '0.625rem 0.625rem 0.625rem 1rem',
      color: '#696CFF',
      textAlign: 'left'
    }}
      onClick={handleClick}>

    </ListItemButton>
  )
}
