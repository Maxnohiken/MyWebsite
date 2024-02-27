import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const App = () => {
    
  const [list, setList] = useState<string[]>([]);
  const [item, setItem] = useState<string>('');

  function addToList(item: string) {
    setList([...list, item]);
  }

  function removeFromList(item: string) {
    setList(list.filter((i) => i !== item));
  }

  return (
     <div style={{backgroundColor:'#cfe8fc', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <h1 style={{textAlign:'center'}}>Lista di cose da fare</h1>
        <TextField 
            label="Aggiungi alla lista"
            id="outlined-size-small"
            sx={{height: '45px', width: '300px'}}
            size="small" type="text" onChange={(e) => setItem(e.target.value)} />
        <Button variant="outlined" onClick={() => addToList(item)}>Aggiungi</Button>
        <ul>
          {list.map((item, itemIndex) => (
            <li key={itemIndex}>
              {item}
              <Button variant="outlined" color="error" onClick={() => removeFromList(item)}>Rimuovi</Button>
              <Checkbox {...label} />
            </li>
          ))}
        </ul>
      </Box>
     </div>
    );
};

export default App;
