import React, { useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { EditForm } from '../../component'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'

export default function Roles () {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  const [array, setArray] = useState([
    { Role: 'Administrator' },
    { Role: 'Manager' },
    { Role: 'Users' },
    { Role: 'Support' },
    { Role: 'Restricted User' },
    { Role: 'Add Role' }
  ])
  const [show, setShow] = useState(false)
  const editForm = () => {
    setShow(!show)
    console.log('EditForm:', show)
  }



  const rows = [
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
    { user: '', email: '', role: '', plan: '', status: '', actions: '' },
  ]

  const [page, setPage] = useState(0)

  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [selectPlan, setSelectPlan] = useState('')

  const handleChange = (event) => {
    setSelectPlan(event.target.value)
  }

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#696CFF',
      },
    }
  })

  return (
    <>
      <div className='role' style={{ display: 'flex', maxWidth: '1440px', margin: '0 auto', padding: '1.5rem' }}>
        <div className='title' style={{ marginTop: '50px', padding: '1.5rem 0 0 1.5rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Roles List</h2>
          <p>A role provides access to predefined menus and features so that depending on </p>
          <p> the assigned role, an administrator can have access to what he needs.</p>
        </div>
        <div className='role-grid' style={{ padding: '1.5rem 0 0 1.5rem' }}>
          <Box sx={{ flexGrow: 1, mt: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {array.map((Roles, index) => (
                <Grid xs={2} sm={4} md={4} key={index} Roles={Roles} >
                  <Item sx={{ padding: '20px' }}>
                    <div className='box-title'>
                      <h5 style={{ fontSize: '1rem' }}>Total users</h5>
                      <AvatarGroup max={4}  >
                        <Avatar alt="Remy Sharp" src='' />
                        <Avatar alt="Travis Howard" src="" />
                        <Avatar alt="Cindy Baker" src="" />
                        <Avatar alt="Agnes Walker" src="" />
                        <Avatar alt="Trevor Henderson" src="" />
                      </AvatarGroup>
                    </div>
                    <h2>{array.Role}</h2>
                    <div style={{ textAlign: 'left' }}>
                      <button style={{ color: '#696CFF', border: 'none', backgroundColor: '#fff' }} onClick={editForm}>Edit Role</button>
                    </div>

                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <div className='role-table' style={{ padding: '1.5rem  0 0 1.5rem' }}>

          <TableContainer component={Paper}>
            <div className='search-row' style={{ padding: '1rem 1.25rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div className='input-search' style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', height: '48px' }}>
                <p style={{ marginRight: '0.5rem', color: '#32475C99' }}>Search</p>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: '0 1rem 0.5rem 0', width: '221px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <ThemeProvider theme={theme}>
                    <TextField color="secondary" placeholder='Search User' sx={{ height: '40px' }} />
                  </ThemeProvider>
                </Box>
              </div>
              <div className='select-search'>
                <Box sx={{ minWidth: 142, mb: '0.5rem' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >Select Plan</InputLabel>
                    <ThemeProvider theme={theme}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectPlan}
                        color="secondary"
                        label="selectplan"
                        onChange={handleChange}
                        sx={{ height: '40px' }}
                      >

                        <MenuItem >Select Plan</MenuItem>
                        <MenuItem >Basic</MenuItem>
                        <MenuItem >Company</MenuItem>
                        <MenuItem >Enterprise</MenuItem>
                        <MenuItem >Team</MenuItem>
                      </Select>
                    </ThemeProvider>
                  </FormControl>
                </Box>
              </div>
            </div>
            <Divider />
            <Table sx={{ width: '100%' }} aria-label="simple table">
              <TableHead>

                <TableRow>
                  <TableCell>USER</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">ROLE</TableCell>
                  <TableCell align="right">PLAN</TableCell>
                  <TableCell align="right">STATUS</TableCell>
                  <TableCell align="right">ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                  // key={row.name}
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {/* {row.name} */}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div >
      </div >
      <EditForm show={show} editForm={editForm}></EditForm>







    </>
  )
}
