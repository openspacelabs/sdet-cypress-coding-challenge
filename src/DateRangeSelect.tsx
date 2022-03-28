import React from 'react';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
        <React.Fragment>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
}
