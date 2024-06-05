import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import wallet from '../../image/wallet-purple.png'
import paypal from '../../image/paypal.png'
import profit from '../../image/profit.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IncomeAreaChart, IncomeRadial } from '../../component'
export default function ActionButton () {

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // useEffect(() => { setValue(1) }, [])


  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ padding: '1.5rem' }}>
              <Tab label="INCOME" value="1" />
              <Tab label="EXPENSES" value="2" />
              <Tab label="PROFIT" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className='total-income'>
              <div className='income-top'>
                <div className='income-icon'>
                  <img src={wallet} alt="" width={46} height={46} />
                </div>
                <div className='income-info'>
                  <p>Total Income</p>
                  <div>
                    <h4>$459.1k</h4>
                    <KeyboardArrowUpIcon style={{ color: 'rgb(113,211,55)' }} />
                    <span style={{ color: 'rgb(113,211,55)', fontSize: '0.875rem' }}>42.9%</span>
                  </div>
                </div>
              </div>
              <div className='income-center'>
                <IncomeAreaChart />
              </div>
              <div className='income-bottom'>
                <div className='bottom-chart'>
                  <IncomeRadial />
                </div>
                <div>
                  <p>Income this week</p>
                  <h5>$39k less than last week</h5>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className='total-income'>
              <div className='income-top'>
                <div className='income-icon'>
                  <img src={paypal} alt="" width={46} height={46} />
                </div>
                <div className='income-info'>
                  <p>Total Expense</p>
                  <div>
                    <h4>$316.5k</h4>
                    <KeyboardArrowUpIcon style={{ color: 'rgb(113,211,55)' }} />
                    <span style={{ color: 'rgb(113,211,55)', fontSize: '0.875rem' }}>27.8%</span>
                  </div>
                </div>
              </div>
              <div className='income-center'>
                <IncomeAreaChart />
              </div>
              <div className='income-bottom'>
                <div className='bottom-chart'>
                  <IncomeRadial />
                </div>
                <div>
                  <p>Expense this week</p>
                  <h5>$16k less than last week</h5>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className='total-income'>
              <div className='income-top'>
                <div className='income-icon'>
                  <img src={profit} alt="" width={46} height={46} />
                </div>
                <div className='income-info'>
                  <p>Total Profit</p>
                  <div>
                    <h4>$147.9k</h4>
                    <KeyboardArrowUpIcon style={{ color: 'rgb(113,211,55)' }} />
                    <span style={{ color: 'rgb(113,211,55)', fontSize: '0.875rem' }}>35.1%</span>
                  </div>
                </div>
              </div>
              <div className='income-center'>
                <IncomeAreaChart />
              </div>
              <div className='income-bottom'>
                <div className='bottom-chart'>
                  <IncomeRadial />
                </div>
                <div>
                  <p>Profit this week</p>
                  <h5>$28k less than last week</h5>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>





    </>
  )
}
