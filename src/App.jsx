import React, { useState, useEffect } from 'react';
import './App.css'
import { Box } from '@mui/material';
import { Card } from './components/Card'

function App() {
  return (
    <div className='bg'>
      <Box sx={{
        width: '50%',
        height: '70vh',
        backgroundColor: 'black'
      }}>
        <Card  />
      </Box>
    </div>
  );
}

export default App;
