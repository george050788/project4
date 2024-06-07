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
import loginboy from '../../image/login-boy.png'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginIn () {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const formRef = useRef()
  const signin = async () => {
    const password = formRef.current['password'].value
    const email = formRef.current['email'].value

    console.log('LoginInfo:', email, password)
    const render = 'https://project4-oq1e.onrender.com'
    const rawResponse = await fetch(`${render}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const content = await rawResponse.json()

    if (content.success) {
      navigate('/dashboards/analytics')
      setError(false)
    }
    else {
      setError(true)
    }
    console.log(content)
    console.log('error:', error)
  }
  return (
    <>

      <div className='left'>
        <img src={loginboy} alt="" width={700} />
      </div>
      <div className='right'>
        <div className='container'>
          <div className='title'>
            <img src="" alt="" />
            <h1>sneat</h1>
          </div>
          <h2>Welcome to Sneat! <img src="" alt="" /></h2>
          <p>Please sign-in to your account and start the adventure</p>

          <div className='msg'>
            <h3>Admin: <strong>admin@sneat.com</strong> / Pass: <strong>admin</strong></h3>
            <h3>Client: <strong>client@sneat.com</strong> / Pass: <strong>client</strong></h3>
          </div>

          <div className={error ? 'error-msg active' : 'error-msg'}>
            <p >* Email or Password is incorrect !</p>
          </div>
          <form action="" ref={formRef}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '25ch' },

              }}
            >
              <TextField label={'Email'} name='email' id="Email" margin="Email" style={{ marginBottom: '10px', width: '100%' }} />
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

            <Button onClick={signin} variant="contained" sx={{ width: '100%', backgroundColor: '#696CFF', mb: '1rem', mt: '0.5rem' }}>
              SIGN IN
            </Button>
            <br />
            <p>New on our platform? <Link to='/register' style={{ color: '#696CFF' }}>Create an account</Link></p>
          </form>
        </div>
      </div>




    </>
  )
}
