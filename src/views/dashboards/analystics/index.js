import React, { useState } from 'react'
import { Order, TotalRevenue, RevenueBar, YearMenuButton, RevenueWeeklyBar, ProfitReport, OrderPie, ActionButton, IncomeRadial } from '../../../component'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import john1 from '../../../image/john1.png'
import wallet from '../../../image/wallet.png'
import paypal from '../../../image/paypal.png'
import purplewallet from '../../../image/wallet-purple.png'
import profit from '../../../image/profit.png'
import greencard from '../../../image/greencard.png'
import yellowcard from '../../../image/yellowcard.png'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Avatar from '@mui/material/Avatar'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Chip from '@mui/material/Chip'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import AvatarGroup from '@mui/material/AvatarGroup'
import pdf from '../../../image/pdf.png'
import timelineavatar1 from '../../../image/timeline-avatar1.png'
import timelineavatar2 from '../../../image/timeline-avatar2.png'
import timelineavatar3 from '../../../image/timeline-avatar3.png'
import timelineavatar4 from '../../../image/timeline-avatar4.png'
import timelineavatar5 from '../../../image/timeline-avatar5.png'
import timelineavatar6 from '../../../image/timeline-avatar6.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'


export default function Analytics () {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }))

  const [rows, setRows] = useState([{
    no: '1', img: 'https://solelysneat.vercel.app/images/cards/chrome.png', browser: 'Chrome', visits: '8.92k', data: '64.91'
  },
  {
    no: '2', img: 'https://solelysneat.vercel.app/images/cards/safari.png', browser: 'Safari', visits: '1.29k', data: '19.03'
  },
  {
    no: '3', img: 'https://solelysneat.vercel.app/images/cards/firefox.png', browser: 'Firefox', visits: '328', data: '3.26'
  },
  {
    no: '4', img: 'https://solelysneat.vercel.app/images/cards/edge.png', browser: 'Edge', visits: '142', data: '3.99'
  },
  {
    no: '5', img: 'https://solelysneat.vercel.app/images/cards/opera.png', browser: 'Opera', visits: '85', data: '2.12'
  },
  {
    no: '6', img: 'https://solelysneat.vercel.app/images/cards/brave.png', browser: 'Brave', visits: '36', data: '1.06'
  },
  ])

  const [operations, setOperations] = useState([{
    no: '1', img: 'https://solelysneat.vercel.app/images/cards/windows.png', system: 'Windows', visits: '475.26k', data: '61.50'
  },
  {
    no: '2', img: 'https://solelysneat.vercel.app/images/cards/mac.png', system: 'Mac', visits: '89.12k', data: '15.67'
  },
  {
    no: '3', img: 'https://solelysneat.vercel.app/images/cards/ubuntu.png', system: 'Ubuntu', visits: '38.68k', data: '5.82'
  },
  {
    no: '4', img: 'https://solelysneat.vercel.app/images/cards/linux.png', system: 'Linux', visits: '30.27k', data: '5.03'
  },
  {
    no: '5', img: 'https://solelysneat.vercel.app/images/cards/chrome.png', system: 'Chrome', visits: '8.34k', data: '3.25'
  },
  {
    no: '6', img: 'https://solelysneat.vercel.app/images/cards/cent.png', system: 'Cent', visits: '2.25k', data: '1.76'
  },
  ])

  const [country, setCountry] = useState([{
    no: '1', img: 'https://solelysneat.vercel.app/images/cards/usa.png', country: 'USA', visits: '87.24k', data: '38.12'
  },
  {
    no: '2', img: 'https://solelysneat.vercel.app/images/cards/brazil.png', country: 'Brazil', visits: '42.69k', data: '28.23'
  },
  {
    no: '3', img: 'https://solelysneat.vercel.app/images/cards/india.png', country: 'India', visits: '12.58k', data: '13.82'
  },
  {
    no: '4', img: 'https://solelysneat.vercel.app/images/cards/australia.png', country: 'Australia', visits: '4.13k', data: '12.72'
  },
  {
    no: '5', img: 'https://solelysneat.vercel.app/images/cards/china.png', country: 'China', visits: '2.21k', data: '7.11'
  },
  {
    no: '6', img: 'https://solelysneat.vercel.app/images/cards/france.png', country: 'France', visits: '1.56k', data: '6.59'
  },
  ])

  const [value, setValue] = useState(1)

  const browseractive = () => {
    setValue(1)
    console.log('browser-active', value)
  }

  const systemactive = () => {
    setValue(2)
    console.log('system-active', value)
  }

  const countryactive = () => {
    setValue(3)
    console.log('country-active', value)
  }

  // const handlechange = (event, newValue) => {
  //   setValue(newValue)
  //   console.log('onchange', value)
  // }


  return (
    <>
      <div className='content'>

        <div style={{ display: 'flex', width: '1440px' }} >
          <div style={{ borderRadius: '8px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', padding: '1.25rem 1.5rem 0 1.5rem', flexBasis: '66.67%' }}>
            <div >
              <h2 style={{ color: '#696CFF', marginBottom: '1rem' }}>Congratulations John!</h2>
              <p style={{ color: 'rgba(50,71,92,0.6)' }}>You have done 72% more sales today.</p>
              <p style={{ color: 'rgba(50,71,92,0.6)', marginBottom: '0.75rem' }}>Check your new badge in your profile.</p>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">VIEW BADGES</Button>
              </Stack>
            </div>
            <div>
              <img src={john1} alt="" width={207} height={170} />
            </div>
          </div>

          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ display: 'flex', paddingLeft: '1.5rem' }}>
              <div style={{ flexBasis: '50%' }}>
                <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                  <div style={{ padding: '0.875rem 1.25rem 0' }}>
                    <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Order</h5>
                    <p style={{ fontSize: '1.5rem' }}>276k</p>
                  </div>
                  <Order></Order>
                </div>
              </div>


              <div style={{ paddingLeft: '1.5rem', flexBasis: '50%' }}>
                <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '1.25rem 1.25rem 1rem', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                      <img src={wallet} alt="" width={42} height={42} />
                    </div>
                    <div>
                      <IconButton aria-label="more" size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                  <div >
                    <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Sales</h5>
                    <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem' }}>$4,679</p>
                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                      <p style={{ color: '#71DD37' }}>28.14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '1440px' }} >
          <div className='analystics-left'>
            <div className='left-container'>
              <div className='revenue-left'>
                <h2>Total Revenue</h2>
                <TotalRevenue />
              </div>
              <div className='revenue-right'>
                <YearMenuButton />
                <RevenueBar />
                <h2>62% Company Growth</h2>

                <div>
                  <div className='revenue-content'>
                    <div className='content-left'>
                      <div className='for-image'>
                        <Avatar sx={{ bgcolor: 'rgba(105,108,255,0.2)' }} variant="rounded">
                          <AttachMoneyRoundedIcon style={{ color: 'rgb(105,108,255' }} />
                        </Avatar>
                      </div>
                      <div className='for-details'>
                        <h3>2024</h3>
                        <p>$32.5k</p>
                      </div>
                    </div>
                    <div className='content-right'>
                      <div className='for-image'>
                        <Avatar sx={{ bgcolor: 'rgba(3,195,236,0.2)' }} variant="rounded">
                          <WalletOutlinedIcon style={{ color: 'rgb(3,195,236' }} />
                        </Avatar>
                      </div>
                      <div className='for-details'>
                        <h3>2023</h3>
                        <p>$41.2k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='analystics-right'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>


                <div style={{ paddingLeft: '1.5rem', flexBasis: '50%' }}>
                  <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '1.25rem 1.25rem 1rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div>
                        <img src={paypal} alt="" width={42} height={42} />
                      </div>
                      <div>
                        <IconButton aria-label="more" size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                    <div >
                      <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Payment</h5>
                      <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem' }}>$2,468</p>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ color: '#FF3E1D', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                        <p style={{ color: '#FF3E1D' }}>14.82%</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div style={{ paddingLeft: '1.5rem', flexBasis: '50%' }}>
                  <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                    <div style={{ padding: '0.875rem 1.25rem 0' }}>
                      <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Revenue</h5>
                      <p style={{ fontSize: '1.5rem' }}>425k</p>
                    </div>
                    <RevenueWeeklyBar></RevenueWeeklyBar>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', paddingLeft: '1.5rem', height: '100%' }}>
                <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '0.875rem 1.25rem', display: 'flex' }}>
                  <div>
                    <h2 style={{ color: 'rgba(50,71,92,0.87)', marginBottom: '0.25rem' }}>Profit Report</h2>
                    <Chip label="YEAR 2024" variant="contained" sx={{ borderRadius: '4px', color: 'rgb(255,171,0)', backgroundColor: 'rgba(255,171,0,0.2)', fontWeight: '500' }} />
                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '0.5rem' }}>
                      <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                      <p style={{ color: '#71DD37' }}>68.2%</p>
                    </div>
                    <p style={{ fontSize: '1.5rem' }}>$84,686k</p>
                  </div>
                  <div>
                    <ProfitReport />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='order-statistics'>
          <div className='statistics-container-left'>
            <div className='order-left'>
              <div className='order-left-title'>
                <div>
                  <h2>Order Statistics</h2>
                  <p>42.82k Total Sales</p>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className='order-left-pie'>
                <div className='pie-left'>
                  <h1>8,258</h1>
                  <p>Total Orders</p>
                </div>
                <div className='pie-right'>
                  <OrderPie />
                </div>
              </div>
              <div className='detail-container'>
                <div className='pie-detail'>
                  <div className='detail-icon' style={{ backgroundColor: 'rgba(105,108,255,0.16)' }}>
                    <PhoneIphoneRoundedIcon style={{ color: '#696CFF' }} />
                  </div>
                  <div className='detail-content'>
                    <div className='content-item'>
                      <h3>Electronic</h3>
                      <p>Mobile, Earbuds, TV</p>
                    </div>
                    <div className='content-number'>
                      <p>82.5k</p>
                    </div>
                  </div>
                </div>
                <div className='pie-detail'>
                  <div className='detail-icon' style={{ backgroundColor: 'rgba(113,221,55,0.16)' }}>
                    <CheckroomIcon style={{ color: 'rgb(113,221,55)' }} />
                  </div>
                  <div className='detail-content'>
                    <div className='content-item'>
                      <h3>Fashion</h3>
                      <p>Tshirt, Jeans, Shoes</p>
                    </div>
                    <div className='content-number'>
                      <p>23.8k</p>
                    </div>
                  </div>
                </div>
                <div className='pie-detail'>
                  <div className='detail-icon' style={{ backgroundColor: 'rgba(3,195,236,0.16)' }}>
                    <HomeOutlinedIcon style={{ color: 'rgb(3,195,236)' }} />
                  </div>
                  <div className='detail-content'>
                    <div className='content-item'>
                      <h3>Decor</h3>
                      <p>Fine Art, Dining</p>
                    </div>
                    <div className='content-number'>
                      <p>849</p>
                    </div>
                  </div>
                </div>
                <div className='pie-detail' style={{ marginBottom: '0px' }}>
                  <div className='detail-icon' style={{ backgroundColor: 'rgba(133,146,163,0.16)' }}>
                    <SportsSoccerIcon style={{ color: 'rgb(133,146,163)' }} />
                  </div>
                  <div className='detail-content'>
                    <div className='content-item'>
                      <h3>Sports</h3>
                      <p>Football, Cricket Kit</p>
                    </div>
                    <div className='content-number'>
                      <p>99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='order-center'>
              <div className='button-header'>
                <ActionButton />
              </div>


            </div>
          </div>
          <div className='statistics-container-right'>
            <div className='order-right'>
              <div className='right-header'>
                <div>
                  <h2>Transactions</h2>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={paypal} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Paypal</p>
                    <h5>Send money</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>+82.6</h5>
                  <p>USD</p>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={purplewallet} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Wallet</p>
                    <h5>Mac'D</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>+270.69</h5>
                  <p>USD</p>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={profit} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Transfer</p>
                    <h5>Refund</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>+637.91</h5>
                  <p>USD</p>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={greencard} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Credit Card</p>
                    <h5>Ordered Food</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>-838.71</h5>
                  <p>USD</p>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={purplewallet} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Wallet</p>
                    <h5>Starbucks</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>+203.33</h5>
                  <p>USD</p>
                </div>
              </div>
              <div className='right-data'>
                <div className='data-left'>
                  <div className='image'>
                    <img src={yellowcard} alt="" width={38} height={38} />
                  </div>
                  <div>
                    <p>Mastercard</p>
                    <h5>Ordered Food</h5>
                  </div>
                </div>
                <div className='data-right'>
                  <h5>-92.45</h5>
                  <p>USD</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className='analytics-bottom'>
          <div className='activity'>
            <div className='timeline-header'>
              <div>
                <h2>Activity Timeline</h2>
              </div>
              <div>
                <IconButton aria-label="more" size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
            <div className='timeline-message'>
              <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{
                      backgroundColor: 'rgb(105, 108, 255)',
                      boxShadow: 'rgba(105, 108, 255, 0.16) 0px 0px 0px 4px'
                    }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className='timeline-content'>
                      <div className='content-left'>
                        <h3>12 Invoices has been paid</h3>
                        <p>Invoices have been paid to the company</p>
                        <div >
                          <img src={pdf} alt="" width={24} height={24} />
                          <h4>Invoices.pdf</h4>
                        </div>
                      </div>
                      <div className='content-right'>12 min ago</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{
                      backgroundColor: 'rgb(255, 171, 0)',
                      boxShadow: 'rgba(255, 171, 0, 0.16) 0px 0px 0px 4px'
                    }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className='timeline-content'>
                      <div className='content-left'>
                        <h3>Client Meeting</h3>
                        <p>Project meeting with john @10:15am</p>
                        <div >
                          <Avatar alt="" src={timelineavatar1} />
                          <div className='card'>
                            <h3>Steven Nash (Client)</h3>
                            <p>CEO of ThemSelection</p>
                          </div>
                        </div>
                      </div>
                      <div className='content-right'>45 min ago</div>
                    </div>

                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{
                      backgroundColor: 'rgb(3,195,236)',
                      boxShadow: 'rgba(3, 195, 236, 0.16) 0px 0px 0px 4px'
                    }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className='timeline-content'>
                      <div className='content-left'>
                        <h3>Create a new project for client</h3>
                        <p>5 team members in a project</p>
                        <div>
                          <AvatarGroup total={5}>
                            <Avatar alt="" src={timelineavatar6} />
                            <Avatar alt="" src={timelineavatar5} />
                            <Avatar alt="" src={timelineavatar4} />
                            <Avatar alt="" src={timelineavatar3} />
                            <Avatar alt="" src={timelineavatar2} />
                          </AvatarGroup>
                        </div>
                      </div>
                      <div className='content-right'>2 days ago</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>




          </div>

          <div className='browser'>
            <div className='browser-header'>
              <Stack spacing={2} direction="row">
                <Button variant={value === 1 ? 'contained' : "text"} onClick={browseractive} >BROWSER</Button>
                <Button variant={value === 2 ? 'contained' : "text"} onClick={systemactive} >OPERATING SYSTEM</Button>
                <Button variant={value === 3 ? 'contained' : "text"} onClick={countryactive} >COUNTRY</Button>
              </Stack>
            </div>
            <div className='browser-content'>
              <div className={value === 1 ? 'display active' : 'display'}>
                <TableContainer >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{
                        [`& .${tableCellClasses.root}`]: {
                          borderBottom: "none"
                        }
                      }}>
                        <TableCell>No</TableCell>
                        <TableCell align="left">BROWSER</TableCell>
                        <TableCell align="left">VISITS</TableCell>
                        <TableCell align="left">DATA IN PERCENTAGE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.no}
                          sx={{
                            [`& .${tableCellClasses.root}`]: {
                              borderBottom: "none"
                            }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={row.img} alt="" width={24} height={24} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.browser}</p>
                          </TableCell>

                          <TableCell align="left">{row.visits}</TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <BorderLinearProgress sx={{ width: '75%' }} variant="determinate" value={row.data} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.data}%</p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className={value === 2 ? 'display active' : 'display'}>
                <TableContainer >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{
                        [`& .${tableCellClasses.root}`]: {
                          borderBottom: "none"
                        }
                      }}>
                        <TableCell>No</TableCell>
                        <TableCell align="left">SYSTEM</TableCell>
                        <TableCell align="left">VISITS</TableCell>
                        <TableCell align="left">DATA IN PERCENTAGE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {operations.map((row) => (
                        <TableRow
                          key={row.no}
                          sx={{
                            [`& .${tableCellClasses.root}`]: {
                              borderBottom: "none"
                            }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={row.img} alt="" width={24} height={24} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.system}</p>
                          </TableCell>

                          <TableCell align="left">{row.visits}</TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <BorderLinearProgress sx={{ width: '75%' }} variant="determinate" value={row.data} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.data}%</p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className={value === 3 ? 'display active' : 'display'}>
                <TableContainer >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{
                        [`& .${tableCellClasses.root}`]: {
                          borderBottom: "none"
                        }
                      }}>
                        <TableCell>No</TableCell>
                        <TableCell align="left">COUNTRY</TableCell>
                        <TableCell align="left">VISITS</TableCell>
                        <TableCell align="left">DATA IN PERCENTAGE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {country.map((row) => (
                        <TableRow
                          key={row.no}
                          sx={{
                            [`& .${tableCellClasses.root}`]: {
                              borderBottom: "none"
                            }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={row.img} alt="" width={24} height={24} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.country}</p>
                          </TableCell>

                          <TableCell align="left">{row.visits}</TableCell>
                          <TableCell align="left" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <BorderLinearProgress sx={{ width: '75%' }} variant="determinate" value={row.data} />
                            <p style={{ marginLeft: '0.875rem' }}>{row.data}%</p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>




          </div>


        </div>
      </div >

    </>
  )
}
