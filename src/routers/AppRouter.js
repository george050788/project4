import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginIn, Analytics, Register, Roles, Email, Calendar, Ecommerce, Crm } from '../views'
import { SearchBar, NavBar } from '../component'


export default function AppRouter () {
  const [open, setOpen] = useState(false)
  const search = (props) => {
    console.log('props:', props)
    setOpen(props)
  }

  return (
    <>
      <NavBar search={search}></NavBar>
      <div style={{ position: 'fixed', top: '0px', left: open ? '390px' : '290px', width: '100%', zIndex: '9' }}><SearchBar ></SearchBar></div>
      <Routes>
        <Route path='/dashboards' >
          <Route path='analytics' exact element={<Analytics />} />
          <Route path='crm' exact element={<Crm />} />
          <Route path='ecommerce' exact element={<Ecommerce />} />
        </Route>
        <Route path='/' exact element={<Navigate to='/login' />} />
        <Route path='/login' exact element={<LoginIn />} />
        <Route path='/register' exact element={<Register />} />

        <Route path='/apps'>
          <Route path='email' exact element={<Email />} />
          <Route path='chat' />
          <Route path='calendar' exact element={<Calendar />} />
          <Route path='invoice' />
          <Route path='user' />
          <Route path='roles' exact element={<Roles />} />
          <Route path='permissions' />
        </Route>
        {/* <Route path='/pages'>
          <Route path='user-profile'>
            <Route path='profile'></Route>
            <Route path='teams'></Route>
            <Route path='projects'></Route>
            <Route path='connections'></Route>
          </Route>
          <Route path='accout-settings'>
            <Route path='account'></Route>
            <Route path='security'></Route>
            <Route path='billing-plan'></Route>
            <Route path='notifications'></Route>
            <Route path='connections'></Route>
          </Route>
          <Route path='faq'></Route>
          <Route path='help-center'></Route>
          <Route path='pricing'></Route>
          <Route path='misc'>
            <Route path='coming-soon'></Route>
            <Route path='under-maintenance'></Route>
            <Route path='404-not-found'></Route>
            <Route path='401-not-authorized'></Route>
            <Route path='500-server-error'></Route>
          </Route>
          <Route path='auth'>
            <Route path='login-v1'></Route>
            <Route path='login-v2'></Route>
            <Route path='login-with-appbar'></Route>
            <Route path='register-v1'></Route>
            <Route path='register-v2'></Route>
            <Route path='register-multi-steps'></Route>
            <Route path='verify-email-v1'></Route>
            <Route path='verify-email-v2'></Route>
            <Route path='forgot-password-v1'></Route>
            <Route path='forgot-password-v2'></Route>
            <Route path='reset-password-v1'></Route>
            <Route path='reset-password-v2'></Route>
            <Route path='two-steps-v1'></Route>
            <Route path='two-steps-v2'></Route>
            <Route path='wizard-examples'>
              <Route path='checkout'></Route>
              <Route path='property-listing'></Route>
              <Route path='create-dealqwe'></Route>
            </Route>
            <Route path='dialog-examples'></Route>
          </Route>
        </Route> */}
      </Routes>






    </>
  )
}
