import { useEffect } from 'react';
import { AlertInterface } from '@types';

// Material-UI
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Styles
import { AlertStyled } from './styles';

// Alert Context
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
  const timeout = setTimeout(() => hideAlert(id!), timeLimit);

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, [timeout]);

  return (
    <>
      <ConditionalAlert
        condition={!!link?.length!}
        wrapper={(children) => (
          <Link
            href={link}
            target="_blank"
            id={id}
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
          {...(!link?.length! && { id })}
        >
          {alertTitle && (
            <AlertTitle>
              {alertTitle}
            </AlertTitle>
          )}
          <Typography variant="body2">
            {text || 'Example Alert'}
          </Typography>
        </AlertStyled>
      </ConditionalAlert>
    </>
  )
}