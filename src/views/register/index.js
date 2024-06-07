import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import registergirl from '../../image/register-girl.png'
import { Link } from 'react-router-dom'

export default function Register () {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const formRef = useRef()
  const signup = async () => {
    const fullname = formRef.current['username'].value
    const password = formRef.current['password'].value
    const email = formRef.current['email'].value

    const user = {
      email,
      contact: '',
      skype: '',
      language: '',
      fullname,
      joinDate: new Date().getTime(),
      address: '',
      country: '',
      avatarURL: '',
      role: '',
      status: '',
    }

    console.log('LoginInfo:', fullname, email, password)
    const render = 'https://project4-oq1e.onrender.com'
    const rawResponse = await fetch(`${render}/api/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const content = await rawResponse.json()

    console.log(content)
  }



  return (
    <>

      <div className='left'>
        <img src={registergirl} alt="" width={700} />
      </div>
      <div className='right'>
        <div className='container'>
          <div className='title'>
            <img src="" alt="" />
            <h1>sneat</h1>
          </div>
          <h2>Advemturn starts here <img src="" alt="" /></h2>
          <p>Make your app management easy and fun!</p>

          <form action="" ref={formRef}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '100%' },

              }}
            >
              <TextField label={'Username'} name='username' id="Username" margin="Username" style={{ marginBottom: '10px' }} />
              <TextField label={'Email'} name='email' id="Email" margin="Email" style={{ marginBottom: '10px' }} />

              <FormControl sx={{ mb: '1rem', width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  name='password'
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

            </Box>

            <Button onClick={signup} variant="contained" sx={{ width: '100%', backgroundColor: '#696CFF', mb: '1rem' }}>
              SIGN UP
            </Button>
            <br />
            <p>Already have an account? <Link to='/login' style={{ color: '#696CFF' }}>Sign in instead</Link></p>
          </form>
        </div>
      </div>





    </>
  )
}

