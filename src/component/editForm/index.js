import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'



export default function EditForm ({ show, editForm }) {

  // const createData = (id, name, Read, Write, Create) => {
  //   return { id, name, Read, Write, Create }
  // }



  const [rows, setRows] = useState([
    { id: 1, name: 'User Management', Read: false, Write: false, Create: false },
    { id: 2, name: 'Content Management', Read: false, Write: false, Create: false },
    { id: 3, name: 'Dispute Management', Read: false, Write: false, Create: false },
    { id: 4, name: 'Database Management', Read: false, Write: false, Create: false },
    { id: 5, name: 'Financial Management', Read: false, Write: false, Create: false },
    { id: 6, name: 'Reporting', Read: false, Write: false, Create: false },
    { id: 7, name: 'API Control', Read: false, Write: false, Create: false },
    { id: 8, name: 'Respository', Read: false, Write: false, Create: false },
    { id: 9, name: 'Payroll', Read: false, Write: false, Create: false },
  ])

  // createData(1, 'User Management', false, false, false),
  // createData(2, 'Content Management', false, false, false),
  // createData(3, 'Dispute Management', false, false, false),
  // createData(4, 'Database Management', false, false, false),
  // createData(5, 'Financial Management', false, false, false),
  // createData(6, 'Reporting', false, false, false),
  // createData(7, 'API Control', false, false, false),
  // createData(8, 'Respository', false, false, false),
  // createData(9, 'Payroll', false, false, false),
  // const [selected, setSelected] = useState([])
  // const isSelected = (id) => selected.indexOf(id) !== -1
  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id)
  //   let newSelected = []

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id)
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1))
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1))
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     )
  //   }
  //   setSelected(newSelected)
  // }
  // const Allcheck = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = rows.map((row) => row.id)
  //     setRows()
  //     return
  //   }
  // }

  const check = (event, id, type) => {
    const isCheck = rows.find(item => {
      return item.id === id

    })
    if (type === 0) {
      isCheck.Read = event.target.checked
    }
    if (type === 1) {
      isCheck.Write = event.target.checked
    }
    if (type === 2) {
      isCheck.Create = event.target.checked
    }
    const newselected = rows.filter(item => {
      return item.id !== id
    }

    )
    let total = [...newselected, isCheck]
    console.log('total', total)
    total = total.sort((a, b) => { return a.id - b.id })
    setRows([...total])

    console.log('isCheck:', isCheck)
    console.log('event', event.target.checked)
    console.log('id', id)
    console.log('type', type)
  }


  const submit = () => {
    editForm()
  }
  const cancel = () => {
    editForm()
  }

  const theme = createTheme({
    palette: {
      error: {
        main: '#8592A3',
      },
    }
  })



  return (
    <>
      <Dialog onClose={!show} open={show} maxWidth='900px'
      >
        <DialogTitle
        >Edit Role</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set Role Permissions
          </DialogContentText>
        </DialogContent>
        {/* <div className={show ? 'form' : 'form show'} style={{
          borderRadius: '8px',
          color: 'rgba(50,71,92,0.87)',
          margin: '32px',
          position: 'relative',
          width: '900px',
          top: '500px',
          verticalAlign: 'middle',
          zIndex: '999',
          backgroundColor: '#fff',

        }}>
          <h2 style={{
            paddingTop: '3.125rem',
            paddingLeft: '3.75rem',
            paddingRight: '3.75rem',
            fontSize: '1.25rem',
            textAlign: 'center'
          }}>
            <span>Edit Role</span>
            <p style={{ fontSize: '0.875rem', color: 'rgba(50,71,92,0.6)' }}>Set Role Permissions</p>
          </h2> */}
        <div className='table' style={{
          padding: '1.5rem 3.75rem'
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '100%' },
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            <TextField label={'Role Name'} id="margin-none" placeholder='Enter Role Name' />
          </Box>
          <TableContainer >
            <Table sx={{ Width: '100%' }} aria-label="simple table">
              <TableHead>
                <h2 style={{ fontSize: '1.25rem', color: '#32475CDE' }}>Role Permission</h2>
                <TableRow>
                  <TableCell sx={{ paddingLeft: 0 }}>Administrator Access</TableCell>
                  <TableCell padding='checkbox'>
                    <Checkbox

                      color="primary"
                    />Select All</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  // const isItemSelected = isSelected(row.id)
                  const labelId = `enhanced-table-checkbox-${index}`
                  return (

                    <TableRow


                      role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell component="th" scope="row" sx={{ paddingLeft: 0, width: '270px' }} >
                        {row.name}
                      </TableCell>
                      <TableCell align="left" padding="checkbox" sx={{ width: '160px', padding: '6px 16px' }}>
                        <Checkbox
                          onClick={(e) => { check(e, row.id, 0) }}
                          sx={{
                            '&.Mui-checked': {
                              color: '#696CFF',
                            }
                          }}
                          checked={row.Read}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />Read</TableCell>
                      <TableCell align="left" padding="checkbox" sx={{ width: '160px', padding: '6px 16px' }} >
                        <Checkbox
                          onClick={(e) => { check(e, row.id, 1) }}
                          sx={{
                            '&.Mui-checked': {
                              color: '#696CFF',
                            }
                          }}
                          checked={row.Write}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />Write</TableCell>
                      <TableCell align="left" padding="checkbox" sx={{ width: '160px', padding: '6px 16px' }}>
                        <Checkbox
                          onClick={(e) => { check(e, row.id, 2) }}
                          sx={{
                            '&.Mui-checked': {
                              color: '#696CFF',
                            }
                          }}
                          checked={row.Create}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />Create</TableCell>

                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div >
        <div className='form-buttons' style={{
          padding: '0 3.75rem 3.125rem 3.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={{ backgroundColor: '#696CFF' }} onClick={submit}>SUBMIT</Button>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" color='error' onClick={cancel}>CANCEL</Button>
            </ThemeProvider>
          </Stack>
        </div>
        {/* </div > */}

      </Dialog >
    </>
  )
}
