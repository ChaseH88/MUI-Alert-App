import { createPortal } from 'react-dom';

// Styles
import { ContainerStyled } from './styles';

// Components
import { Alert } from '../../components/Alert';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';

// Hooks
import { useAlertReducer } from '../../context/Alert/useAlertReducer';


export const AlertContainer = () => {

  const { alerts } = useAlertReducer();

  return (
    <>
      {createPortal(
        <ContainerStyled>
          <TransitionGroup>
            {alerts.map((item) => (
              <Collapse key={item.id!}>
                <Alert {...item} />
              </Collapse>
            ))}
          </TransitionGroup>
        </ContainerStyled>,
        document.querySelector('#alerts')!
      )}
    </>
  );
}

export default AlertContainer;
