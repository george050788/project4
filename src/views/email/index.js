import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IconButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import CachedIcon from '@mui/icons-material/Cached'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined'
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
export default function Email () {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderTopRightRadius: '8px',
    border: '1px solid rgba(50,71,92,0.12)',

    backgroundColor: '#fff',
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: '100%',
    // },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
  }))
  const [emaildata, setEmailData] = useState([])
  const [checked, setChecked] = useState([false])
  const [update, setUpdate] = useState(0)

  // select ALL
  const handleChange1 = (event) => {
    let arr = new Array(emaildata.length).fill(event.target.checked)
    setChecked([...arr])
    setUpdate(1)
  }

  // each checkbox
  const handleChange2 = (event, i) => {
    console.log(event.target.checked, i, 'check:', checked)
    let array = checked
    array[i] = !array[i]
    setChecked([...array])
  }

  useEffect(() => {
    async function fetchData () {
      let emaildata1 = await fetch('/email', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      }).then((res) => {

        res.json().then((data) => { console.log('data:', data); setEmailData(data) }
        )

          ; return res
      })

      console.log('content', emaildata1)

    }
    fetchData()
    console.log('emaildata:', emaildata)
    const checkedarr = new Array(emaildata.length).fill(false)
    setChecked(checkedarr)
    console.log('checked:', checkedarr)
  }, [])


  return (
    <>
      <div className='content'>
        <div className='email-display'>
          <div className='email-nav'>
            <Box sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
              <div className='email-button'>
                {/* onClick={()=>{console.log('emaildata:', emaildata)}} */}
                <Button variant="contained" sx={{ width: '100%', backgroundColor: '#696CFF' }} >COMPOSE</Button>
              </div>

              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <EmailOutlinedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Inbox" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <SendOutlinedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Sent" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <CreateOutlinedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Drafts" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <StarBorderOutlinedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <ReportGmailerrorredOutlinedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Spam" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <DeleteOutlineRoundedIcon sx={{ marginRight: '0.6rem', }} />

                      <ListItemText primary="Trash" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <h3>LABELS</h3>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <FiberManualRecordRoundedIcon style={{ color: 'rgb(113,211,55)' }} sx={{ fontSize: 'medium', mr: '0.875rem' }} />

                      <ListItemText primary="Personal" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <FiberManualRecordRoundedIcon style={{ color: 'rgb(105,108,255)' }} sx={{ fontSize: 'medium', mr: '0.875rem' }} />

                      <ListItemText primary="Company" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <FiberManualRecordRoundedIcon style={{ color: 'rgb(255,171,0)' }} sx={{ fontSize: 'medium', mr: '0.875rem' }} />

                      <ListItemText primary="Important" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        marginBottom: '0.25rem',
                        padding: '0 1.25rem',
                        textAlign: 'left',
                        color: 'rgba(50,71,92,0.87)'
                      }}>

                      <FiberManualRecordRoundedIcon style={{ color: 'rgb(255,62,29)' }} sx={{ fontSize: 'medium', mr: '0.875rem' }} />

                      <ListItemText primary="Private" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>

          </div>


          <div className='email-content'>
            <div className='content-header'>
              <Search sx={{ height: '56px', width: '100%' }}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: '#32475C61' }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search mail"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ height: '56px', width: '100%' }}
                />
              </Search>
            </div>
            <div className='email-form' style={{ borderLeft: '1px solid rgba(50,71,92,0.1)' }}>
              <div className='first-line' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <FormControlLabel
                    label=""
                    control={
                      <Checkbox
                        checked={checked.every((v) => v === true)}
                        indeterminate={checked.includes(false) && checked.includes(true)}
                        onChange={handleChange1}
                        sx={{ borderRadius: '8px', color: '#32475C61' }}
                      />
                    }
                    sx={{ padding: '0.75rem 16px' }}
                  />
                </div>
                {/* {checked && 
              <IconButton> <DeleteOutlineIcon /></IconButton>
                <IconButton> <MailOutlineIcon /></IconButton>
                <IconButton> <FolderOpenOutlinedIcon /></IconButton>
                <IconButton> <LabelOutlinedIcon /></IconButton>
                } */}

                <div style={{ marginRight: '0.875rem' }}>
                  <IconButton aria-label="delete" size="small">
                    <CachedIcon fontSize="small" sx={{ color: 'rgba(50,71,92,0.6)' }} />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                </div>
              </div>
              <Divider />
              <div className='email-msg' style={{ height: 'calc(100vh - 122px)', overflowY: 'auto' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
                  {emaildata.map((data, index) => (
                    <div className='message' key={index} >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 16px' }}>
                        <div className='email-content-left' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <FormControlLabel
                            label=""
                            control={<Checkbox
                              checked={checked[index] ? checked[index] : false}
                              onChange={(event) => { handleChange2(event, index) }}
                              sx={{ borderRadius: '8px', color: '#32475C61' }}
                            />}
                          />
                          <StarOutlineIcon sx={{ position: 'relative', right: '0.875rem', color: 'rgba(50,71,92,0.87)' }} />
                          <Avatar alt="" src={data.avatar} width={32} height={32} sx={{ mr: '0.75rem' }} />
                          <h5>{data.name}</h5>
                          <p>{data.message}</p>
                        </div>
                        <div className='email-right'>
                          <div className='time'>

                            {data.personal && <FiberManualRecordRoundedIcon style={{ color: 'rgb(113,211,55)' }} sx={{ fontSize: 'small', mr: '0.875rem' }} />}
                            {data.company && <FiberManualRecordRoundedIcon style={{ color: 'rgb(105,108,255)' }} sx={{ fontSize: 'small', mr: '0.875rem' }} />}
                            {data.important && <FiberManualRecordRoundedIcon style={{ color: 'rgb(255,171,0)' }} sx={{ fontSize: 'small', mr: '0.875rem' }} />}
                            {data.private && <FiberManualRecordRoundedIcon style={{ color: 'rgb(255,62,29)' }} sx={{ fontSize: 'small', mr: '0.875rem' }} />}
                            <p>{data.time}</p>
                          </div>
                          <div className='hover-icons'>
                            <IconButton aria-label="delete">
                              <DeleteOutlineIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                              <MailOutlineIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                              <ReportGmailerrorredOutlinedIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <Divider />
                    </div>
                  ))}
                  {/* <FormControlLabel
                    label=""
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} sx={{ borderRadius: '8px', color: '#32475C61' }} />}
                  /> */}
                </Box>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
