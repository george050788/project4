import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import trophy from '../../../image/trophy.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { VistorWeeklyBar, ActivityArea, ProfitBar, ExpenseRadialbar, TotalIncome, TotalBalance, ExpenseBar, PerformanceRadar, ConversionRate } from '../../../component'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Divider from '@mui/material/Divider'
import purplecard from '../../../image/purplecard.png'
import wallet from '../../../image/wallet.png'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import walletonly from '../../../image/walletonly.png'
import desktop from '../../../image/desktop.png'
import shoppingbag from '../../../image/shopping-bag.png'
import paypalprimary from '../../../image/paypal-primary.png'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

export default function Ecommerce () {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#03c3ec' : '#308fe8',
    },
  }))

  const [rows, setRows] = useState([{
    product: 'OnePlus 7Pro', brand: 'OnePlus', img: 'https://solelysneat.vercel.app/images/cards/oneplus-7pro-light.png', icon: 'phone',
    category: 'Smart phone', payment: '$120', remain: '/$499', paid: 'Partially Paid', status: 'CONFIRMED', action: ''
  },
  {
    product: 'Magic Mouse', brand: 'Apple', img: 'https://solelysneat.vercel.app/images/cards/apple-magic-mouse-light.png', icon: 'mouse',
    category: 'Mouse', payment: '$149', remain: '', paid: 'Fully Paid', status: 'COMPLETED', action: ''
  },
  {
    product: 'iMac Pro', brand: 'Apple', img: 'https://solelysneat.vercel.app/images/cards/apple-iMac-pro-light.png', icon: 'computer',
    category: 'Computer', payment: '', remain: '$0/$899', paid: 'Unpaid', status: 'CANCELLED', action: ''
  },
  {
    product: 'Note 10', brand: 'Samsung', img: 'https://solelysneat.vercel.app/images/cards/samsung-note-10-light.png', icon: 'phone',
    category: 'Smart phone', payment: '$169', remain: '', paid: 'Fully Paid', status: 'COMPLETED', action: ''
  },
  {
    product: 'iPhone 11 Pro', brand: 'Apple', img: 'https://solelysneat.vercel.app/images/cards/apple-iPhone-11-pro-light.png', icon: 'phone',
    category: 'Smart phone', payment: '$399', remain: '', paid: 'Fully Paid', status: 'COMPLETED', action: ''
  },
  {
    product: 'Mi Led TV 4X', brand: 'Xiaomi', img: 'https://solelysneat.vercel.app/images/cards/mi-led-tv-4x-light.png', icon: 'tv',
    category: 'Smart TV', payment: '$349', remain: '/$2599', paid: 'Partially Paid', status: 'CONFIRMED', action: ''
  },
  {
    product: 'Logitech MX', brand: 'Logitech', img: 'https://solelysneat.vercel.app/images/cards/logitech-mx-light.png', icon: 'mouse',
    category: 'Mouse', payment: '$89', remain: '', paid: 'Fully Paid', status: 'COMPLETED', action: ''
  }
  ])





  return (
    <>
      <div className='content'>

        <div style={{ display: 'flex', width: '1440px' }} >
          <div style={{ borderRadius: '8px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: "flex-end", padding: '1.25rem 1.5rem 0 1.5rem', flexBasis: '33.33%' }}>
            <div >
              <h2 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1rem', marginBottom: '0.5rem' }}>Congratulations Katie!</h2>
              <p style={{ color: 'rgba(50,71,92,0.6)', marginBottom: '0.875rem' }}>Best seller of the month</p>
              <h1 style={{ color: '#696CFF' }}>$48.9k</h1>
              <p style={{ color: 'rgba(50,71,92,0.6)', marginBottom: '0.75rem' }}>78% of target</p>
              <Stack spacing={2} direction="row" sx={{ marginBottom: '1rem' }}>
                <Button variant="contained">VIEW SALES</Button>
              </Stack>
            </div>
            <div>
              <img src={trophy} alt="" width={100} height={155} />
            </div>
          </div>

          <div style={{ flexBasis: '66.67%' }}>
            <div style={{ display: 'flex', paddingLeft: '1.5rem' }}>
              <div style={{ flexBasis: '50%' }}>
                <div style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.25rem 1.25rem 1rem' }}>
                    <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem' }}>New Visitor</h5>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>last week</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ padding: '0 0 1rem 1.25rem' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: '500' }}>23%</h2>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontWeight: 'bold' }}>
                        <ArrowDownwardIcon style={{ color: '#FF3E1D', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                        <p style={{ color: '#FF3E1D' }}>8.75%</p>
                      </div>
                    </div>
                    <div>
                      <VistorWeeklyBar />
                    </div>
                  </div>
                </div>
              </div>

              <Divider orientation="vertical" />
              <div style={{ flexBasis: '50%' }}>
                <div style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.25rem 1.25rem 1rem' }}>
                    <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem' }}>Activity</h5>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>last week</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ padding: '0 0 1rem 1.25rem' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: '500' }}>82%</h2>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontWeight: 'bold' }}>
                        <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                        <p style={{ color: '#71DD37' }}>19.6%</p>
                      </div>
                    </div>
                    <div>
                      <ActivityArea />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', width: '1440px', marginTop: '1.5rem' }} >
          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ flexBasis: '50%' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flexBasis: '50%' }}>
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
                        <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem', fontWeight: '500' }}>$4,679</p>
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                          <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontWeight: '600' }}>28.14%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ flexBasis: '50%' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                      <div style={{ padding: '0.875rem 1.25rem 0' }}>
                        <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Profit</h5>
                        <p style={{ fontSize: '1.5rem' }}>624k</p>
                      </div >
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ProfitBar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ flexBasis: '50%' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flexBasis: '50%' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                      <div style={{ padding: '0.875rem 1.25rem 0' }}>
                        <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Expense</h5>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpenseRadialbar />
                      </div>
                      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>$2k Expenses more</p>
                      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)', paddingBottom: '1rem' }}>than last month</p>
                    </div>
                  </div>
                  <div style={{ flexBasis: '50%' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '1.25rem 1.25rem 1rem', height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                          <img src={purplecard} alt="" width={42} height={42} />
                        </div>
                        <div>
                          <IconButton aria-label="more" size="small">
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </div>
                      </div>
                      <div >
                        <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Transactions</h5>
                        <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem' }}>$14,854</p>
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                          <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontWeight: '600' }}>17.53%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div style={{ flexBasis: '66.67%' }}>
            <div style={{ display: 'flex', paddingLeft: '1.5rem' }}>
              <div style={{ flexBasis: '66.67%' }}>
                <div style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.25rem 1rem' }}>
                    <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Total Income</h5>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Yearly report overview</p>
                  </div>
                  <div>
                    <TotalIncome />
                  </div>
                </div>
              </div>

              <Divider orientation="vertical" />
              <div style={{ flexBasis: '33.33%' }}>
                <div style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.25rem 1.25rem 1rem' }}>
                    <div>
                      <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Report</h5>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Monthly Avg. $45.578k</p>
                    </div>
                    <div>
                      <IconButton aria-label="more" size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                  <div style={{ padding: '1.625rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ padding: '0.5rem 0.75rem', display: 'flex', borderRadius: '6px', backgroundColor: 'rgb(245,245,249)', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <div style={{ marginRight: '0.75rem', width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: '6px', }}>
                        <img src={paypalprimary} alt="" width={22} height={21} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                        <div >
                          <h3 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Income</h3>

                          <p style={{ fontSize: '1.125rem', color: 'rgba(50,71,92,0.87)' }}>$42,845</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.875rem', color: 'rgb(113,221,55)', fontWeight: '500', marginBottom: '0.25rem' }}>+2.7k</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '0.5rem 0.75rem', display: 'flex', borderRadius: '6px', backgroundColor: 'rgb(245,245,249)', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <div style={{ marginRight: '0.75rem', width: '44px', height: '44px', display: 'flex', borderRadius: '6px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                        <img src={shoppingbag} alt="" width={22} height={21} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                        <div >
                          <h3 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Expense</h3>

                          <p style={{ fontSize: '1.125rem', color: 'rgba(50,71,92,0.87)' }}>$38,658</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.875rem', color: 'rgb(255,62,29)', fontWeight: '500', marginBottom: '0.25rem' }}>-1.15k</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '0.5rem 0.75rem', display: 'flex', borderRadius: '6px', backgroundColor: 'rgb(245,245,249)', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <div style={{ marginRight: '0.75rem', width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: '6px', }}>
                        <img src={walletonly} alt="" width={22} height={21} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                        <div>
                          <h3 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Profit</h3>
                          <p style={{ fontSize: '1.125rem', color: 'rgba(50,71,92,0.87)' }}>$18,220</p>
                        </div>
                        <div >
                          <p style={{ fontSize: '0.875rem', color: 'rgb(113,221,55)', fontWeight: '500', marginBottom: '0.25rem' }}>+1.34k</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', width: '1440px', marginTop: '1.5rem' }}>
          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.25rem 1rem' }}>
                <div>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Performance</h5>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500', color: 'rgba(50,71,92,0.6)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <p style={{ paddingLeft: '1.5rem', flexBasis: '50%' }}>Earning: $846.17</p>
                  <p style={{ paddingLeft: '1.5rem', flexBasis: '50%' }}>Sales: 25.7M</p>
                </div>
                <PerformanceRadar />
              </div>
            </div>
          </div>

          <div style={{ flexBasis: '66.67%' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.25rem 1.25rem 0.5rem' }}>
                    <div>
                      <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Conversion Rate</h5>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Compared To Last Month</p>
                    </div>
                    <div>
                      <IconButton aria-label="more" size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 1.25rem 0.3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <h2 style={{ fontSize: '2rem', color: 'rgba(50,71,92,0.87)', marginRight: '0.375rem' }}>8.72%</h2>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                        <p style={{ color: '#71DD37', fontWeight: 'bold' }}>4.8%</p>
                      </div>
                    </div>
                    <div>
                      <ConversionRate />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem', padding: '0.5rem 1.25rem 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div>
                        <h3 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1rem' }}>Impression</h3>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>12.4k Visits</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.75rem' }} />
                        <p style={{ color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>12.8%</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div>
                        <h3 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1rem' }}>Added To Cart</h3>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>32 Product in cart</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ color: '#FF3E1D', width: '16px', height: '16px', marginRight: '0.75rem' }} />
                        <p style={{ color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>-8.3%</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div>
                        <h3 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1rem' }}>Checkout</h3>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>21 Product checkout</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.75rem' }} />
                        <p style={{ color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>9.12%</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div>
                        <h3 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1rem' }}>Purchased</h3>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>12 Orders</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.75rem' }} />
                        <p style={{ color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>2.24%</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div style={{ flexBasis: '50%' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                  <div style={{ flexBasis: '50%' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                        <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '1.25rem 1.25rem 1rem', height: '100%' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div>
                              <img src={desktop} alt="" width={42} height={42} />
                            </div>
                            <div>
                              <IconButton aria-label="more" size="small">
                                <MoreVertIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </div>
                          <div >
                            <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Revenue</h5>
                            <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem', fontWeight: '500' }}>$42,389</p>
                            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                              <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                              <p style={{ color: '#71DD37', fontWeight: '600' }}>52.76%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                        <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                          <div style={{ padding: '0.875rem 1.125rem' }}>
                            <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem', marginBottom: '0.5rem' }}>Sales</h5>
                            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>482k</p>
                            <div style={{ backgroundColor: 'rgba(3,195,236,0.16)', color: 'rgba(3,195,236)', fontSize: '0.875rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', marginBottom: '0.875rem', height: '24px' }}>
                              <span style={{ padding: '0 0.625rem' }}>+34%</span>
                            </div>
                            <p style={{ color: 'rgba(50,71,92,0.38)', fontSize: '0.875rem' }}>Sales Target</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                              <BorderLinearProgress sx={{ width: '80%', color: 'rgba(3,195,236)' }} variant="determinate" value={78} />
                              <p style={{ marginLeft: '0.5rem', color: 'rgba(50,71,92,0.38)', fontSize: '0.875rem' }}>78%</p>
                            </div>
                          </div >
                          <div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ flexBasis: '50%', padding: '1.5rem 0 0 1.5rem' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.25rem 1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
                          <div><h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem' }}>Expenses</h5></div>
                          <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '500' }}>$84.7k</h2>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontWeight: 'bold' }}>
                              <ArrowDownwardIcon style={{ color: '#FF3E1D', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                              <p style={{ color: '#FF3E1D' }}>8.2%</p>
                            </div>
                          </div>
                          <div style={{ backgroundColor: 'rgba(133,146,163,0.16)', color: 'rgba(133,146,163)', fontSize: '0.875rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', marginBottom: '0.875rem', height: '28px' }}>
                            <span style={{ padding: '0 0.625rem' }}>JULY 2024</span>
                          </div>
                        </div>
                        <div>
                          <ExpenseBar />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>





        </div>


        <div style={{ display: 'flex', width: '1440px', marginTop: '1.5rem' }}>
          <div style={{ flexBasis: '66.67%', backgroundColor: '#fff', borderRadius: '8px' }}>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                  >
                    <TableCell sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>PRODUCT</TableCell>
                    <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>CATEGORY</TableCell>
                    <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>PAYMENT</TableCell>
                    <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>ORDER STATUS</TableCell>
                    <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.product}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell> */}
                      <TableCell component="th" scope="row" sx={{ padding: '0.5rem 16px' }} >
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <img src={row.img} alt="" width={32} height={32} />
                          <div style={{ marginLeft: '0.875rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>{row.product}</h3>
                            <p style={{ color: 'rgba(50,71,92,0.38)', fontSize: '0.875rem' }}>{row.brand}</p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <div >
                            {row.icon === 'phone' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', backgroundColor: 'rgba(105,108,255,0.16)', borderRadius: '50%' }}><PhoneIphoneIcon sx={{ color: 'rgba(105,108,255)', fontSize: 'medium' }} /></div>}
                            {row.icon === 'mouse' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', backgroundColor: 'rgba(255,171,0,0.16)', borderRadius: '50%' }}><MouseOutlinedIcon sx={{ color: 'rgba(255,171,0)', fontSize: 'medium' }} /></div>}
                            {row.icon === 'tv' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', backgroundColor: 'rgba(255,62,29,0.16)', borderRadius: '50%' }}><LiveTvOutlinedIcon sx={{ color: 'rgba(255,62,29)', fontSize: 'medium' }} /></div>}
                            {row.icon === 'computer' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', backgroundColor: 'rgba(3,196,236,0.16)', borderRadius: '50%' }}><DesktopMacOutlinedIcon sx={{ color: 'rgba(3,196,236)', fontSize: 'medium' }} /></div>}
                          </div>
                          <p style={{ marginLeft: '0.5rem', fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>{row.category}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <p style={{ fontSize: '1rem', color: 'rgba(105,108,255)', fontWeight: '600' }}>{row.payment}</p>
                            <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.38)', fontWeight: '600' }}>{row.remain}</p>
                          </div>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>{row.paid}</p>
                        </div>
                      </TableCell>
                      <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          {row.status === 'CONFIRMED' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(105,108,255)', backgroundColor: 'rgba(105,108,255,0.16)' }}>{row.status}</div>}
                          {row.status === 'CANCELLED' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,62,29)', backgroundColor: 'rgba(255,62,29,0.16)' }}>{row.status}</div>}
                          {row.status === 'COMPLETED' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,211,55)', backgroundColor: 'rgba(113,211,55,0.16)' }}>{row.status}</div>}
                        </div>
                      </TableCell>
                      <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                        <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <IconButton aria-label="more" size="medium">
                            <MoreVertIcon fontSize="medium" />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.25rem 1rem' }}>
                <div>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Total Balance</h5>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', backgroundColor: 'rgba(255,171,0, 0.16)', marginRight: '0.94rem' }}>
                      <AccountBalanceWalletOutlinedIcon sx={{ color: 'rgb(255,171,0)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                      <p style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem' }}>$2.54k</p>
                      <p style={{ color: 'rgba(50,71,92,0.6)', fontSize: '0.875rem' }}>Wallet</p>
                    </div>
                  </div>
                </div>
                <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', backgroundColor: 'rgba(133,146,163, 0.16)', marginRight: '0.94rem' }}>
                      <AttachMoneyIcon sx={{ color: 'rgb(133,146,163)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                      <p style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem' }}>$4.21k</p>
                      <p style={{ color: 'rgba(50,71,92,0.6)', fontSize: '0.875rem' }}>Paypal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                <TotalBalance />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1.5rem 1.5rem' }}>
                <div >
                  <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>You have done 57.6% more sales.</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Check your new badge in your profile.</p>
                </div>
                <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', backgroundColor: 'rgba(255,171,0, 0.16)' }}>
                  <ChevronRightOutlinedIcon sx={{ color: 'rgb(255,171,0)' }} />
                </div>
              </div>

            </div>
          </div>


        </div>


      </div>












    </>
  )
}
