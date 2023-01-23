import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './App.css';
import Invoice from './Components/Invoice/Invoice';


function App() {
  return (
    <div className="App">
            {/* mui date picker */}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Invoice />
      </LocalizationProvider>
    </div>
  );
}

export default App;
