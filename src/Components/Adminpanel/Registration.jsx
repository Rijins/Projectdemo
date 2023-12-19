import { Button, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React from 'react'
import './Registration.css'

const Registration = () => {


  const [from, setFrom] = React.useState('');

  const handleChange = (event) => {
    setFrom(event.target.value);
  };



  return (
    <div className='reg'>
      <Grid>
        <Paper>
       
       <TextField id="filled-basic" label="Workshopname" variant="filled" /><br/><br/>
       <TextField id="filled-basic" label="Owner name" variant="filled" /><br/><br/>
       <TextField id="filled-basic" label="Place" variant="filled" /><br/><br/>
       <TextField id="filled-basic" label="Contact number" variant="filled" /><br/><br/>
       <TextField id="filled-basic" label="Watsapp number" variant="filled" /><br/><br/>
       
       <TextField id="filled-basic" label="Address" variant="filled" /><br/><br/><br/>




      <InputLabel id="demo-simple-select-label">Open from</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={from}
    label="from"
    onChange={handleChange}
  >
    <MenuItem value={8}>8:00 AM</MenuItem>
    <MenuItem value={9}>9:00 AM</MenuItem>
    <MenuItem value={10}>10:00 AM</MenuItem>
  </Select>
TO
  <Select>
  <MenuItem value={6}>6:00 PM</MenuItem>
  <MenuItem value={7}>7:00 PM</MenuItem>
    <MenuItem value={8}>8:00 PM</MenuItem>
    <MenuItem value={9}>9:00 PM</MenuItem>
    <MenuItem value={10}>10:00 PM</MenuItem>
    <MenuItem value={11}>11:00 PM</MenuItem>
  </Select>

  

  <br/><br/>
       <TextField id="filled-basic" label="GSTIN" variant="filled" /><br/><br/>
       <Button variant="contained" color="success">
  Submit
</Button>
         
</Paper>
      </Grid>
    </div>
  )
}

export default Registration
