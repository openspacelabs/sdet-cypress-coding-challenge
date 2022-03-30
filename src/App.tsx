import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import './App.css';
import { DateRangeSelect } from './DateRangeSelect';

export function App() {
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
        <DateRangeSelect />
      </LocalizationProvider>
    </div>
  );
}
