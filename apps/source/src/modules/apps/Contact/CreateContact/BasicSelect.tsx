import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface Option {
  id: number,
  description: string
}


export default function BasicSelect({name, options, title}) {
  const [medPro, setMedPro] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMedPro(event.target.value as string);
  };
  const [labelMessage, setLabelMessage] = React.useState('')
  React.useEffect(() => {
      if (medPro === '') {
        setLabelMessage(title)
      } else{
        setLabelMessage(`${title}: ${medPro}`)
      }
    }
  , [medPro])
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl 
      sx={{
        width: '100%',
        mb: { xs: 4, xl: 6 },
      }}
      fullWidth>
        <InputLabel id="demo-simple-select-label">{labelMessage}</InputLabel>
        <Select
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={medPro}
          label="Medical Profession"
          onChange={handleChange}
        >
          {options.map( (option) => {
            return (<MenuItem value={option.id}>{`${option.id}. ${option.description}`}</MenuItem>)
          }).reverse()}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}