import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { RatingStar, CustomerRating, SalesActivity, SalesStats, Progress, Sessions, GeneratedLeads, YearlySelectButton, SalesHeatmap, EarningReport } from '../../../component'
import cube from '../../../image/cube.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Divider from '@mui/material/Divider'
import oneplusnord from '../../../image/oneplus-nord.png'
import microsoftsurface from '../../../image/microsoft-surface.png'
import beatsheadphone from '../../../image/beats-headphone.png'
import appleiPhone from '../../../image/apple-iPhone.png'
import xiaomiband from '../../../image/xiaomi-band.png'
import googlepixel from '../../../image/google-pixel.png'
import hpenvy from '../../../image/hp-envy.png'
import oneplusnordgreen from '../../../image/oneplus-nord-green.png'
import fitbitwatch from '../../../image/fitbit-watch.png'
import appleiMac from '../../../image/apple-iMac.png'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import usa from '../../../image/usa.png'
import india from '../../../image/india.png'
import brazil from '../../../image/brazil.png'
import china from '../../../image/china.png'
import belgium from '../../../image/belgium.png'
import australia from '../../../image/australia.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import avatar1 from '../../../image/team-avatar1.png'
import avatar2 from '../../../image/team-avatar2.png'
import avatar4 from '../../../image/team-avatar4.png'
import avatar5 from '../../../image/team-avatar5.png'
import CircularProgress from '@mui/material/CircularProgress'
import PersonIcon from '@mui/icons-material/Person'
import customer1 from '../../../image/customer1.png'
import customer2 from '../../../image/customer2.png'
import customer3 from '../../../image/customer3.png'
import customer4 from '../../../image/customer4.png'
import customer6 from '../../../image/customer6.png'
import paypal from '../../../image/paypal-light.png'
import ma from '../../../image/mastercard.png'
import visa from '../../../image/visa.png'
export default function Crm () {

  const [rows, setRows] = useState([{
    name: 'Nathan Wagner', position: 'iOS Developer', avatar: '../../../image/team-avatar1.png', project: 'ZIPCAR', tasks: '87/135', progress: ''
  },
  {
    name: 'Emma Bowen', position: 'UI/UX Designer', avatar: '../../../image/team-avatar2.png', project: 'BITBANK', tasks: '340/420', progress: ''
  },
  {
    name: 'Adrian McGuire', position: 'React developer', avatar: '', project: 'PAYERS', tasks: '50/82', progress: ''
  },
  {
    name: 'Alma Gonzalez', position: 'Project Manager', avatar: '../../../image/team-avatar4.png', project: 'BRANDI', tasks: '98/260', progress: ''
  },
  {
    name: 'Travis Collins', position: 'VueJS developer', avatar: '../../../image/team-avatar5.png', project: 'AVIATO', tasks: '12/25', progress: ''
  }
  ])

  const [customer, setCustomer] = useState([{
    name: 'Henry Barnes', email: 'jok@puc.co.uk', amount: '459.65', status: 'PAID', paidby: 'ma'
  },
  {
    name: 'Herman Holland', email: 'sami@lelo.com', amount: '93.81', status: 'PENDING', paidby: 'visa'
  },
  {
    name: 'Hallie Warner', email: 'initus@odemi.com', amount: '934.34', status: 'PENDING', paidby: 'visa'
  },
  {
    name: 'John Davidson', email: 'tum@upkesja.gov', amount: '794.97', status: 'PAID', paidby: 'paypal'
  },
  {
    name: 'Cora Schmidt', email: 'wipare@tin.com', amount: '19.49', status: 'PAID', paidby: 'ma'
  },
  {
    name: 'Betty Ross', email: 'nur@kaomor.edu', amount: '636.27.65', status: 'FAILED', paidby: 'paypal'
  }
  ])








  return (
    <>
      <div className='content'>

        <div style={{ display: 'flex', width: '1440px' }} >
          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                <div>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Customer Ratings</h5>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0 1.5rem 1.5rem' }}>
                <RatingStar />
                <div style={{ display: 'flex', gap: '0.625rem', justifyItems: 'flex-start', alignItems: 'center' }}>
                  <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(105,108,255)', backgroundColor: 'rgba(105,108,255,0.16)', fontSize: '0.8125rem' }}>+5.0</div>
                  <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Points from last month</p>
                </div>
              </div>
              <div>
                <CustomerRating />
              </div>
            </div>
          </div>

          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem' }}>


            <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Overview & Sales Activity</h5>
                <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Check out each column for more details</p>
              </div>
              <div>
                <SalesActivity />
              </div>
            </div>


          </div>
          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flexBasis: '50%' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexBasis: '50%' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff' }}>
                      <div style={{ padding: '0.875rem 1.25rem 0' }}>
                        <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Sessions</h5>
                        <p style={{ fontSize: '1.5rem' }}>2845</p>
                      </div >
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Sessions />
                      </div>
                    </div>
                  </div>
                  <div style={{ flexBasis: '50%', paddingLeft: '1.5rem' }}>
                    <div style={{ borderRadius: '8px', backgroundColor: '#fff', padding: '1.25rem 1.25rem 1rem', height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                          <img src={cube} alt="" width={42} height={42} />
                        </div>
                        <div>
                          <IconButton aria-label="more" size="small">
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </div>
                      </div>
                      <div >
                        <h5 style={{ color: 'rgba(50,71,92,0.6)', fontSize: '1rem' }}>Order</h5>
                        <p style={{ fontSize: '1.5rem', marginBottem: '0.5rem', fontWeight: '500' }}>$1,286</p>
                        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '0.875rem', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ color: '#FF3E1D', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#FF3E1D', fontWeight: '600' }}>13.24%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flexBasis: '50%', paddingTop: '1.5rem' }}>
                <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                        <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Generated Leads</h5>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Monthly Report</p>
                      </div>

                      <div style={{ padding: '0 0 1rem 1.25rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '500' }}>4,234</h2>
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontWeight: 'bold' }}>
                          <ArrowUpwardIcon style={{ color: '#71DD37', width: '16px', height: '16px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37' }}>12.8%</p>
                        </div>
                      </div>

                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <GeneratedLeads />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', width: '1440px', paddingTop: '1.5rem' }} >
          <div style={{ flexBasis: '66.67%' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: '50%', backgroundColor: '#fff', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.375rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'rgba(50,71,92,0.87)' }}>Top Products by <span style={{ color: '#696CFF' }}>Sales</span></h3>
                  <div>
                    <IconButton aria-label="more" size="small">
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
                <div style={{ padding: '1.125rem 1.5rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <img src={oneplusnord} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Oneplus Nord</h4>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Oneplus</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>$98,348</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <img src={xiaomiband} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Smart Band 4</h4>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Xiaomi</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>$15,459</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <img src={microsoftsurface} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Surface Pro X</h4>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Microsoft</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>$4,589</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <img src={appleiPhone} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>iPhone 13</h4>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Apple</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>$84,345</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <img src={beatsheadphone} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Bluetooth Earphone</h4>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Beats</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>$103,748</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider orientation="vertical" />
              <div style={{ flexBasis: '50%' }}>
                <div style={{ flexBasis: '50%', backgroundColor: '#fff', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.375rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'rgba(50,71,92,0.87)' }}>Top Products by <span style={{ color: '#696CFF' }}>Volumn</span></h3>
                    <div>
                      <IconButton aria-label="more" size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                  <div style={{ padding: '1.125rem 1.5rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={hpenvy} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                        <div>
                          <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>ENVY Laptop</h4>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>HP</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600', marginRight: '0.875rem' }}>12.4k</p>
                        <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,221,55)', backgroundColor: 'rgba(113,221,55,0.16)', fontSize: '0.8125rem' }}>+12.4%</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={appleiMac} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                        <div>
                          <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Apple</h4>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>iMac Pro</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600', marginRight: '0.875rem' }}>74.9k</p>
                        <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,62,29)', backgroundColor: 'rgba(255,62,29,0.16)', fontSize: '0.8125rem' }}>-8.5%</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={fitbitwatch} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                        <div>
                          <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Smart Watch</h4>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Fitbit</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600', marginRight: '0.875rem' }}>4.4k</p>
                        <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,221,55)', backgroundColor: 'rgba(113,221,55,0.16)', fontSize: '0.8125rem' }}>+17.6%</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.375rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={oneplusnordgreen} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                        <div>
                          <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Oneplus Nord</h4>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Oneplus</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600', marginRight: '0.875rem' }}>12.34k</p>
                        <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,221,55)', backgroundColor: 'rgba(113,221,55,0.16)', fontSize: '0.8125rem' }}>+13.9%</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={googlepixel} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                        <div>
                          <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Pixel 4a</h4>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Google</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600', marginRight: '0.875rem' }}>8.65k</p>
                        <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,62,29)', backgroundColor: 'rgba(255,62,29,0.16)', fontSize: '0.8125rem' }}>-11.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem' }}>
            <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.25rem 1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Earning Report</h5>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Weekly Earnings overview</p>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(105,108,255,0.16)', borderRadius: '5px', marginRight: '0.75rem' }}>
                    <TrendingUpIcon sx={{ color: 'rgb(105,108,255)', width: '1em', height: '1em', fontSize: '22px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>Net Profit</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>12.4k Sales</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$1,619</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                    <p style={{ color: 'rgba(50,71,92,0.38)' }}>18.6%</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(113,221,55,0.16)', borderRadius: '5px', marginRight: '0.75rem' }}>
                    <AttachMoneyIcon sx={{ color: 'rgb(113,221,55)', width: '1em', height: '1em', fontSize: '22px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>Total Income</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Sales, Affiliation</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$3,571</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                    <p style={{ color: 'rgba(50,71,92,0.38)' }}>39.6%</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(133,146,163,0.16)', borderRadius: '5px', marginRight: '0.75rem' }}>
                    <CreditCardIcon sx={{ color: 'rgb(133,146,163)', width: '1em', height: '1em', fontSize: '22px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>Total Expense</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>ADVT, Marketing</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$430</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                    <p style={{ color: 'rgba(50,71,92,0.38)' }}>52.8%</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '0 1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <EarningReport />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', width: '1440px', paddingTop: '1.5rem' }} >
          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sales Analytics</h5>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div style={{ marginRight: '0.375rem', lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,221,55)', backgroundColor: 'rgba(113,221,55,0.16)', fontSize: '0.8125rem' }}>+42.6%</div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>Than last year</p>
                  </div>
                </div>
                <div>
                  <YearlySelectButton />
                </div>
              </div>
              <div>
                <SalesHeatmap />
              </div>
            </div>
          </div>
          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem' }}>
            <div style={{ borderRadius: '8px', backgroundColor: '#fff', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ color: 'rgba(50,71,92,0.87)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sales by Countries</h5>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Monthly Sales overview</p>
                </div>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={usa} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$8,656k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontSize: '0.875', fontWeight: '600' }}>25.8%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>United state of america</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>894k</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={brazil} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$2,415k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <KeyboardArrowDownIcon style={{ color: '#FF3E1D', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#FF3E1D', fontSize: '0.875', fontWeight: '600' }}>-6.2%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Brazil</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>645k</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={india} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$865k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontSize: '0.875', fontWeight: '600' }}>12.4%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>India</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>148k</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={australia} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$745k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <KeyboardArrowDownIcon style={{ color: '#FF3E1D', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#FF3E1D', fontSize: '0.875', fontWeight: '600' }}>-11.9%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Australia</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>86k</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={belgium} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$45k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontSize: '0.875', fontWeight: '600' }}>16.2%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>Belgium</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>42k</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <img src={china} alt="" width={38} height={38} style={{ marginRight: '0.75rem' }} />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', marginRight: '0.25rem' }}>$12k</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <ExpandLessIcon style={{ color: '#71DD37', width: '20px', height: '20px', marginRight: '0.25rem' }} />
                          <p style={{ color: '#71DD37', fontSize: '0.875', fontWeight: '600' }}>14.8%</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.38)' }}>China</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)', fontWeight: '600' }}>8k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flexBasis: '33.33%', paddingLeft: '1.5rem' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'rgba(50,71,92,0.87)' }}>Sales Stats</h3>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SalesStats />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#71dd37', borderRadius: '50%', marginRight: '0.375rem' }}></div>
                  <h3 style={{ color: 'rgba(50,71,92,0.5)', fontSize: '1rem' }}>Convension Ratio</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'rgb(235,238,240)', borderRadius: '50%', marginRight: '0.375rem' }}></div>
                  <h3 style={{ color: 'rgba(50,71,92,0.5)', fontSize: '1rem' }}>Total Requirements</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', width: '1440px', paddingTop: '1.5rem' }} >
          <div style={{ flexBasis: '33.33%' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'rgba(50,71,92,0.87)' }}>Team Members</h3>
                <div>
                  <IconButton aria-label="more" size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div style={{ height: '100%' }}>
                <TableContainer >
                  <Table sx={{ minWidth: 590 }} aria-label="simple table">
                    <TableHead>
                      <TableRow
                        sx={{
                          [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none"
                          }
                        }}
                      >
                        <TableCell sx={{ padding: '0.75rem 16px 0.75rem 1.5rem', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>NAME</TableCell>
                        <TableCell align="right" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>PROJECT</TableCell>
                        <TableCell align="right" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>TASKS</TableCell>
                        <TableCell align="right" sx={{ padding: '0.75rem 1.5rem 0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>PROGRESS</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.position}
                          sx={{
                            [`& .${tableCellClasses.root}`]: {
                              borderBottom: "none"
                            }
                          }}
                        >
                          {/* <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell> */}
                          <TableCell component="th" scope="row" sx={{ padding: '0.5rem 16px 0.5rem 1.5rem' }} >
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '38px', height: '38px' }}>
                                {
                                  row.project === 'ZIPCAR' && <img src={avatar1} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.project === 'BITBANK' && <img src={avatar2} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.project === 'PAYERS' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,171,0,0.16)', borderRadius: '50%', width: '38px', height: '38px' }}><p style={{ color: 'rgb(255,171,0)', fontSize: '1rem', fontWeight: '600', letterSpacing: '1px' }}>AM</p></div>
                                }
                                {
                                  row.project === 'BRANDI' && <img src={avatar4} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.project === 'AVIATO' && <img src={avatar5} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }

                              </div>
                              <div style={{ marginLeft: '0.875rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>{row.name}</h3>
                                <p style={{ color: 'rgba(50,71,92,0.38)', fontSize: '0.875rem' }}>{row.position}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell align="right" sx={{ padding: '0.5rem 16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                              {row.project === 'ZIPCAR' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(105,108,255)', backgroundColor: 'rgba(105,108,255,0.16)' }}>{row.project}</div>}
                              {row.project === 'BITBANK' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,62,29)', backgroundColor: 'rgba(255,62,29,0.16)' }}>{row.project}</div>}
                              {row.project === 'PAYERS' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,171,0)', backgroundColor: 'rgba(255,171,0,0.16)' }}>{row.project}</div>}
                              {row.project === 'BRANDI' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(3,195,236)', backgroundColor: 'rgba(3,195,236,0.16)' }}>{row.project}</div>}
                              {row.project === 'AVIATO' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(133,146,163)', backgroundColor: 'rgba(133,146,163,0.16)' }}>{row.project}</div>}
                            </div>
                          </TableCell>
                          <TableCell align="right" sx={{ padding: '0.5rem 16px' }}>
                            <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.38)', fontWeight: '600' }}>{row.tasks}</p>
                          </TableCell>
                          <TableCell align="right" sx={{ padding: '0.5rem 1.5rem 0.5rem 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div >

                              {
                                row.project === 'ZIPCAR' && <CircularProgress variant="determinate" sx={{ color: '#696cff' }} thickness={5} size={35} value={64} />
                              }
                              {
                                row.project === 'BITBANK' && <CircularProgress variant="determinate" sx={{ color: 'rgba(255,62,29)' }} thickness={5} size={35} value={80} />
                              }
                              {
                                row.project === 'PAYERS' && <CircularProgress variant="determinate" sx={{ color: 'rgba(255,171,0)' }} thickness={5} size={35} value={61} />
                              }
                              {
                                row.project === 'BRANDI' && <CircularProgress variant="determinate" sx={{ color: 'rgba(3,195,236)' }} thickness={5} size={35} value={38} />
                              }
                              {
                                row.project === 'AVIATO' && <CircularProgress variant="determinate" sx={{ color: 'rgba(133,146,163)' }} thickness={5} size={35} value={48} />
                              }

                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

          </div>

          <div style={{ flexBasis: '66.67%', paddingLeft: '1.5rem' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '100%' }}>
              <div >
                <TableContainer >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow

                      >
                        <TableCell sx={{ padding: '0.75rem 16px 0.75rem 1.5rem', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>CUSTOMER</TableCell>
                        <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>AMOUNT</TableCell>
                        <TableCell align="left" sx={{ padding: '0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>STATUS</TableCell>
                        <TableCell align="left" sx={{ padding: '0.75rem  16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>PAID BY</TableCell>
                        <TableCell align="left" sx={{ padding: '0.75rem 1.5rem 0.75rem 16px', color: 'rgba(50,71,92,0.87)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '600' }}>ACTIONS</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {customer.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          {/* <TableCell component="th" scope="row">
                            {row.no}
                          </TableCell> */}
                          <TableCell component="th" scope="row" sx={{ padding: '0.5rem 16px 0.5rem 1.5rem' }} >
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '38px', height: '38px' }}>
                                {
                                  row.name === 'Henry Barnes' && <img src={customer1} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.name === 'Herman Holland' && <img src={customer2} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.name === 'Hallie Warner' && <img src={customer3} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.name === 'John Davidson' && <img src={customer4} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }
                                {
                                  row.name === 'Cora Schmidt' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(240,239,240)', borderRadius: '50%', width: '38px', height: '38px' }}><PersonIcon sx={{ color: 'rgba(50,71,92,0.6)' }} /></div>
                                }
                                {
                                  row.name === 'Betty Ross' && <img src={customer6} alt="" width={38} height={38} style={{ borderRadius: '50%' }} />
                                }

                              </div>
                              <div style={{ marginLeft: '0.875rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.6)' }}>{row.name}</h3>
                                <p style={{ color: 'rgba(50,71,92,0.38)', fontSize: '0.875rem' }}>{row.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                            <p style={{ fontSize: '1rem', color: 'rgba(50,71,92,0.38)', fontWeight: '600' }}>${row.amount}</p>
                          </TableCell>
                          <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                              {row.status === 'PAID' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(113,221,55)', backgroundColor: 'rgba(113,221,55,0.16)' }}>{row.status}</div>}
                              {row.status === 'FAILED' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,62,29)', backgroundColor: 'rgba(255,62,29,0.16)' }}>{row.status}</div>}
                              {row.status === 'PENDING' && <div style={{ lineHeight: '24px', height: '24px', fontWeight: '600', borderRadius: '4px', padding: '0 0.625rem', color: 'rgba(255,171,0)', backgroundColor: 'rgba(255,171,0,0.16)' }}>{row.status}</div>}

                            </div>
                          </TableCell>
                          <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>
                            <div >
                              {
                                row.paidby === 'ma' && <img src={ma} alt="" width={50} height={29} />
                              }
                              {
                                row.paidby === 'visa' && <img src={visa} alt="" width={50} height={29} />
                              }
                              {
                                row.paidby === 'paypal' && <img src={paypal} alt="" width={50} height={29} />
                              }

                            </div>
                          </TableCell>
                          <TableCell align="left" sx={{ padding: '0.5rem 16px' }}>

                            <div style={{ marginLeft: '0.75rem' }}>
                              <IconButton aria-label="more" size="small">
                                <MoreVertIcon fontSize="small" />
                              </IconButton>
                            </div>
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


      </div>


    </>
  )
}
