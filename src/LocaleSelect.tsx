import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';

export type SupportedLocales = keyof typeof locales;

interface LocaleSelectProps {
  locale: string;
  setLocale: (locale: SupportedLocales) => void;
}

export function LocaleSelect({ locale, setLocale }: LocaleSelectProps) {
  return (
    <Autocomplete
      options={Object.keys(locales)}
      getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
      style={{ width: 300 }}
      value={locale}
      disableClearable
      onChange={(event: any, newValue: string | null) => {
        setLocale(newValue as SupportedLocales);
      }}
      renderInput={(params) => (
        <TextField {...params} label='Locale' fullWidth />
      )}
    />
  );
}
