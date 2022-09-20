import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#f3f3f3'
    }
  }
});

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
