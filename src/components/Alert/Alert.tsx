import { useEffect } from 'react';

// Material-UI
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Styles
import { AlertStyled } from './styles';

// Alert Context
import { AlertInterface } from '../../context/Alert/context';
import { useAlertReducer } from '../../context/Alert/useAlertReducer';

const ConditionalAlert = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
}) => (
  condition ?
    wrapper(children) as React.ReactElement :
    <>{children}</>
)

export const Alert = ({
  id,
  timeLimit,
  alertType,
  alertTitle,
  text,
  link
}: AlertInterface) => {

  const { hideAlert } = useAlertReducer();

  useEffect(() => {
    const timeout = setTimeout(() => hideAlert(id!), timeLimit);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ConditionalAlert
        condition={!!link?.length!}
        wrapper={(children) => (
          <Link
            href={link}
            target="_blank"
          >
            {children}
          </Link>
        )}
      >
        <AlertStyled
          elevation={6}
          variant="filled"
          severity={alertType}
          onClose={() => hideAlert(id!)}
        >
          <AlertTitle>
            {alertTitle || `${alertType.charAt(0).toUpperCase()}${alertType.slice(1)}`}
          </AlertTitle>
          <Typography variant="body2">
            {text || 'Example Alert'}
          </Typography>
        </AlertStyled>
      </ConditionalAlert>
    </>
  )
}