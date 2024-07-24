import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  const [ counter, setCounter ]=useState(0);
  const [form,setForm]=useState({
    "name":'',
    "gen":'',
    "dir":'',
    "year":''
  })
  let showData=()=>{
    console.log(form);
  }

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          defaultValue="Movie Name"
          name='name'
          value={form.name}
          onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Genre"
          defaultValue="Genre"
          name='gen'
          value={form.gen}
          onChange={valueCap}
        />     
        <TextField
         required
         id="outlined-required"
         label="Director"
         defaultValue="Director"
         name='dir'
         value={form.dir}
         onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Release Year"
          defaultValue="Release Year"
          name='year'
          value={form.year}
          onChange={valueCap}
        />
        
      </div>
      <Button variant="contained" onClick={showData}>Submit</Button><br/>
    </Box>
  )
}

export default Add