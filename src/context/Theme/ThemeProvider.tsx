import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)
