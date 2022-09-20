// Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Components
import { AlertContainer } from './components/AlertContainer';
import { AlertManager } from './components/AlertManager/AlertManager';

export const App = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <Typography variant="h1" component="h1">
      Alert App
    </Typography>
    <AlertManager />
    <AlertContainer />
  </Box>
);

