import { createPortal } from 'react-dom';

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
        <TransitionGroup>
          {alerts.map((item) => (
            <Collapse key={item.id!}>
              <Alert {...item} />
            </Collapse>
          ))}
        </TransitionGroup>,
        document.querySelector('#alerts')!
      )}
    </>
  );
}

export default AlertContainer;
