import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background.default};
  }

  #alerts {
    position: fixed;
    top: 1vh;
    right: 0.5vw;
    bottom: auto;
    left: auto;
  }
`;

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <SCThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </SCThemeProvider>
)
