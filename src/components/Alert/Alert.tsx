import { useEffect } from 'react';

// Material-UI
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';

// Styles
import { AlertStyled } from './styles';

// Alert Context
import { AlertInterface } from '../../context/Alert/context';
import { useAlertReducer } from '../../context/Alert/useAlertReducer';

export const Alert = (props: AlertInterface) => {

  const { hideAlert } = useAlertReducer();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert(props.id!);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideAlert, props.id]);

  return (
    <AlertStyled
      elevation={6}
      variant="filled"
      severity={props.alertType}
      onClose={() => hideAlert(props.id!)}
    >
      <AlertTitle>
        {props.alertType}
      </AlertTitle>
      <Typography variant="body2">
        {props.text}
      </Typography>
    </AlertStyled>
  )
}