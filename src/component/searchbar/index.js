import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import avatar1 from '../../image/avatar1.png'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TranslateIcon from '@mui/icons-material/Translate'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'


export default function SearchBar () {

  const { pathname } = useLocation()
  const pathList = ['/login', '/register']
  console.log(pathname)

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#fff',
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginTop: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: '100%',
    },
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

  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <>
      {pathList.includes(pathname) ? null :
        (<div className='header'>
          {/* <div className='header' style={{}}> */}


          <Search sx={{ height: '70px' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search (Ctrl+/)"
              inputProps={{ 'aria-label': 'search' }}
              disabled
              sx={{ position: 'absolute', top: '0.85rem' }}
            />

            <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
              <IconButton aria-label="delete">
                <TranslateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DarkModeOutlinedIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <GridViewOutlinedIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <NotificationAddOutlinedIcon />
              </IconButton>
              <IconButton aria-label="delete" >
                <img src={avatar1} alt="" width={40} height={40} style={{ borderRadius: '50%' }} />
              </IconButton>
            </Stack>
          </Search>
          <div className='user-menu' style={{ display: 'none' }}>
            <Box sx={{ width: '230px', maxWidth: 360, bgcolor: 'background.paper' }}>
              <List className='header'>
                <div className='img'></div>
                <h3>John Doe</h3>
                <h4>Admin</h4>
              </List>
              <Divider />
              <List component="nav" aria-label="main user folders">
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemIcon>
                    <PersonOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>
                    <MailOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon>
                    <ChatBubbleOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat" />
                </ListItemButton>
              </List>
              <Divider />
              <List component="nav" aria-label="second user folders">
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemIcon>
                    <SettingsRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemIcon>
                    <AttachMoneyRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Price" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                >
                  <ListItemIcon>
                    <HelpOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </List>
              <Divider />
              <List component="nav" aria-label="last user folders">
                <ListItemButton
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                >
                  <ListItemIcon>
                    <PowerSettingsNewRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItemButton>
              </List>
            </Box>
          </div>

          {/* </div> */}
        </div>)
      }
    </>
  )
}
