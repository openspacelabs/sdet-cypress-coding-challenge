import React from 'react';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import './DateRangeSelect.css';

export function DateRangeSelect() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <DateRangePicker
      startText='Start Date'
      endText='End Date'
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <div className='DateRangeSelect'>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </div>
      )}
    />
  );
}
