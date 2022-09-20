// Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Components
import { AlertManager } from './components/AlertManager';

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
    <Typography
      variant="h1"
      component="h1"
      sx={{ margin: '0 0 .15em' }}
    >
      Alert App
    </Typography>
    <AlertManager />
  </Box>
);

