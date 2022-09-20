import { useEffect } from 'react';

// Material-UI
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// Alert Context
import { AlertInterface } from '../../context/Alert/context';
import { useAlertReducer } from '../../context/Alert/useAlertReducer';

export const Alert = (props: AlertInterface) => {

  const { hideAlert } = useAlertReducer();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert(props.id!);
    }, 300000);

    return () => clearTimeout(timeout);
  }, [hideAlert, props.id]);

  return (
    <MuiAlert
      elevation={6}
      variant="filled"
      severity={props.alertType}
      onClose={() => hideAlert(props.id!)}
    >
      <AlertTitle>
        {props.alertType}
      </AlertTitle>
      {props.text}
    </MuiAlert>
  )
}