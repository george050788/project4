import React, { useState } from 'react'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined'
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined'
import ViewArrayOutlinedIcon from '@mui/icons-material/ViewArrayOutlined'
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { ExpandHandler } from '../../component'


export default function NavBar (search) {

  const drawerWidth = 260
  const { pathname } = useLocation()
  const pathList = ['/login', '/register']
  console.log(pathname)

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  })

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  })

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  )

  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [dashExpand, setDashExpand] = useState(false)
  const [invoiceExpand, setInvoiceExpand] = useState(false)
  const [userExpand, setUserExpand] = useState(false)
  const [userviewExpand, setUserviewExpand] = useState(false)
  const [roleExpand, setRoleExpand] = useState(false)
  const [pageExpand, setPageExpand] = useState(false)
  const [authExpand, setAuthExpand] = useState(false)
  const [wizardExpand, setWizardExpand] = useState(false)

  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true)

    console.log('search:', search)
    search.search(!open)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    search.search(!open)
  }

  // const handleClick = () => {
  //   setExpand(!expand)
  // }



  // const collapseListener = (e) => {
  //   // setExpand(e.target)
  //   console.log('text:', e.target)
  //   console.log('expand:', isExpand)
  // }


  return (
    <>

      {pathList.includes(pathname) ? null :
        (
          <div className='navbar'>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar position="fixed" open={open}>
                {/* <Toolbar> */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                  }}
                >

                </IconButton>
                {/* </Toolbar> */}
              </AppBar>
              <Drawer variant="permanent" open={open}>

                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>


                <List>
                  {['Dashboards'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          backgroundColor: 'rgba(105, 108,255,0.16)',
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          color: '#696CFF',
                          textAlign: 'left'
                        }}
                        onClick={() => { setDashExpand(!dashExpand) }}
                      // expand={(expand === 1) ? true : false}
                      >

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                            color: '#696CFF'
                          }}
                        >
                          {index === 0 && <HomeOutlinedIcon />}
                        </ListItemIcon>

                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        {dashExpand ? <ExpandMore /> : <ChevronRightIcon />}
                      </ListItemButton>

                    </ListItem>
                  ))}
                  <Collapse in={dashExpand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/dashboards/analytics' >

                        <ListItemButton sx={{
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                          textAlign: 'left'
                        }}>
                          <ListItemIcon>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                          </ListItemIcon>
                          <ListItemText primary="Analytics" sx={{ marginLeft: '-1.8rem' }} />
                        </ListItemButton>
                      </NavLink>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}
                        onClick={() => { navigate('/dashboards/crm') }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="CRM" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}
                        onClick={() => { navigate('/dashboards/ecommerce') }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="eCommerce" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                  </Collapse>

                </List>

                <Divider textAlign="left">{open ? 'APPS & PAGES' : ''}</Divider>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1rem',
                        textAlign: 'left'
                      }}
                      onClick={() => { navigate('/apps/email') }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : 'auto',
                          justifyContent: 'center',
                        }}>
                        <MailOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Email" sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1rem',
                        textAlign: 'left'
                      }}
                      onClick={() => { navigate('/apps/chat') }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : 'auto',
                          justifyContent: 'center',
                        }}>
                        <ChatBubbleOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Chat" sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1rem',
                        textAlign: 'left'
                      }}
                      onClick={() => { navigate('/apps/calendar') }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : 'auto',
                          justifyContent: 'center',
                        }}>
                        <CalendarMonthRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  {/* {['Email', 'Chat', 'Calendar'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left'
                        }}
                        onClick={({ text }) => { navigate(`/apps/${text}`) }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <MailOutlineOutlinedIcon />}
                          {index === 1 && <ChatBubbleOutlineOutlinedIcon />}
                          {index === 2 && <CalendarMonthRoundedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem> */}
                  {/* ))} */}
                  {/* {['Invoice', 'User', 'Roles & Permissions', 'Pages', 'Auth Pages', 'Wizard Examples'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left',
                        }}
                      >
                        
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <ReceiptOutlinedIcon />}
                          {index === 1 && <PersonOutlineOutlinedIcon />}
                          {index === 2 && <VerifiedUserOutlinedIcon />}
                          {index === 3 && <DescriptionOutlinedIcon />}
                          {index === 4 && <LockOpenOutlinedIcon />}
                          {index === 5 && <FeedOutlinedIcon />}

                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        {index === 0 && invoiceExpand ? <ExpandMore /> : <ChevronRightIcon />}
                        {index === 1 && userExpand ? <ExpandMore /> : <ChevronRightIcon />}
                        {index === 2 && roleExpand ? <ExpandMore /> : <ChevronRightIcon />}
                        {index === 3 && pageExpand ? <ExpandMore /> : <ChevronRightIcon />}
                        {index === 4 && authExpand ? <ExpandMore /> : <ChevronRightIcon />}
                        {index === 5 && wizardExpand ? <ExpandMore /> : <ChevronRightIcon />}
                      </ListItemButton>
                    </ListItem>
                  ))} */}
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setInvoiceExpand(!invoiceExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <ReceiptOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Invoice' sx={{ opacity: open ? 1 : 0 }} />
                    {invoiceExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <Collapse in={invoiceExpand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/apps/roles' >

                        <ListItemButton sx={{
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                          textAlign: 'left'
                        }}>
                          <ListItemIcon>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                          </ListItemIcon>
                          <ListItemText primary="List" sx={{ marginLeft: '-1.8rem' }} />
                        </ListItemButton>
                      </NavLink>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="Preview" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="Add" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setUserExpand(!userExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='User' sx={{ opacity: open ? 1 : 0 }} />
                    {userExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <Collapse in={userExpand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/apps/roles' >

                        <ListItemButton sx={{
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                          textAlign: 'left'
                        }}>
                          <ListItemIcon>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                          </ListItemIcon>
                          <ListItemText primary="List" sx={{ marginLeft: '-1.8rem' }} />
                        </ListItemButton>
                      </NavLink>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}
                        onClick={() => { setUserviewExpand(!userviewExpand) }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="View" sx={{ marginLeft: '-1.8rem' }} />
                        {userviewExpand ? <ExpandMore /> : <ChevronRightIcon />}
                      </ListItemButton>
                      <Collapse in={userviewExpand} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/apps/roles' >

                            <ListItemButton sx={{
                              margin: '0px 1rem',
                              borderRadius: '6px',
                              padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                              textAlign: 'left'
                            }}>
                              <ListItemIcon>
                                <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                              </ListItemIcon>
                              <ListItemText primary="Account" sx={{ marginLeft: '-1.2rem' }} />
                            </ListItemButton>
                          </NavLink>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{
                            margin: '0px 1rem',
                            borderRadius: '6px',
                            padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                            textAlign: 'left'
                          }}>
                            <ListItemIcon>
                              <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                            </ListItemIcon>
                            <ListItemText primary="Security" sx={{ marginLeft: '-1.2rem' }} />
                          </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{
                            margin: '0px 1rem',
                            borderRadius: '6px',
                            padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                            textAlign: 'left'
                          }}>
                            <ListItemIcon>
                              <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                            </ListItemIcon>
                            <ListItemText primary="Billing & Plans" sx={{ marginLeft: '-1.2rem' }} />
                          </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{
                            margin: '0px 1rem',
                            borderRadius: '6px',
                            padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                            textAlign: 'left'
                          }}>
                            <ListItemIcon>
                              <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                            </ListItemIcon>
                            <ListItemText primary="Notification" sx={{ marginLeft: '-1.2rem' }} />
                          </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{
                            margin: '0px 1rem',
                            borderRadius: '6px',
                            padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                            textAlign: 'left'
                          }}>
                            <ListItemIcon>
                              <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                            </ListItemIcon>
                            <ListItemText primary="Connection" sx={{ marginLeft: '-1.2rem' }} />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                  </Collapse>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setRoleExpand(!roleExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <VerifiedUserOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Role & Permissions' sx={{ opacity: open ? 1 : 0 }} />
                    {roleExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <Collapse in={roleExpand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/apps/roles' >

                        <ListItemButton sx={{
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                          textAlign: 'left'
                        }}>
                          <ListItemIcon>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                          </ListItemIcon>
                          <ListItemText primary="Roles" sx={{ marginLeft: '-1.8rem' }} />
                        </ListItemButton>
                      </NavLink>
                    </List>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{
                        margin: '0px 1rem',
                        borderRadius: '6px',
                        padding: '0.625rem 0.625rem 0.625rem 1.3rem',
                        textAlign: 'left'
                      }}>
                        <ListItemIcon>
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 'small' }} />
                        </ListItemIcon>
                        <ListItemText primary="Permissions" sx={{ marginLeft: '-1.8rem' }} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setPageExpand(!pageExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <DescriptionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Pages' sx={{ opacity: open ? 1 : 0 }} />
                    {pageExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setAuthExpand(!authExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <LockOpenOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Auth Pages' sx={{ opacity: open ? 1 : 0 }} />
                    {authExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <ListItemButton sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    margin: '0px 1rem',
                    borderRadius: '6px',
                    padding: '0.625rem 0.625rem 0.625rem 1rem',
                    textAlign: 'left',
                  }}
                    onClick={() => { setWizardExpand(!wizardExpand) }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <FeedOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Wizard Examples' sx={{ opacity: open ? 1 : 0 }} />
                    {wizardExpand ? <ExpandMore /> : <ChevronRightIcon />}
                  </ListItemButton>


                  {['Dialog Examples'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left'
                        }}

                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <UnarchiveOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider textAlign="left">USER INTERFACE</Divider>
                <List>
                  {['Typography', 'Icons', 'Icons Test', 'Cards', 'Components'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left'
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <TitleOutlinedIcon />}
                          {index === 1 && <InsertEmoticonOutlinedIcon />}
                          {index === 2 && <InsertEmoticonOutlinedIcon />}
                          {index === 3 && <RecentActorsOutlinedIcon />}
                          {index === 4 && <Inventory2OutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider textAlign="left">FORMS & TABLES</Divider>
                <List>
                  {['Form Elements', 'Form Layouts', 'Form Validation', 'Form Wizard', 'Table', 'Mui DataGrid'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left'
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <ListAltOutlinedIcon />}
                          {index === 1 && <ListAltOutlinedIcon />}
                          {index === 2 && <PlaylistAddCheckOutlinedIcon />}
                          {index === 3 && <ViewArrayOutlinedIcon />}
                          {index === 4 && <CalendarViewMonthOutlinedIcon />}
                          {index === 5 && <GridOnOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider textAlign="left">CHARTS & MISC</Divider>
                <List>
                  {['Charts', 'Access Control', 'Others'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          margin: '0px 1rem',
                          borderRadius: '6px',
                          padding: '0.625rem 0.625rem 0.625rem 1rem',
                          textAlign: 'left'
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index === 0 && <InsertChartOutlinedIcon />}
                          {index === 1 && <ShieldOutlinedIcon />}
                          {index === 2 && <MoreHorizOutlinedIcon />}

                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

              </Box>
            </Box>
          </div>
        )
      }


    </>
  )
}
