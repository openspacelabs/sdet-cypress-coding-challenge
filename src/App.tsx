import React from 'react';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

import './App.css';
import { LocaleSelect, SupportedLocales } from './LocaleSelect';
import { DateRangeSelect } from './DateRangeSelect';

export function App() {
  const [locale, setLocale] = React.useState<SupportedLocales>('enUS');

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );

  return (
    <div className='App'>
      <ThemeProvider theme={themeWithLocale}>
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
          <LocaleSelect locale={locale} setLocale={setLocale} />
          <DateRangeSelect />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}
