// Components
import Button from '@mui/material/Button';

// Styles
import './App.css';
import { Alert } from './components/Alert';

// Hooks
import { useAlertReducer } from './context/Alert/useAlertReducer';


const buttons = [
  {
    text: 'Success',
    alertType: 'success',
  },
  {
    text: 'Error',
    alertType: 'error',
  },
  {
    text: 'Warning',
    alertType: 'warning',
  },
  {
    text: 'Info',
    alertType: 'info',
  }
];


function App() {

  const { showAlert, hideAlert, alerts } = useAlertReducer();

  return (
    <div id="app">
      <div className="container">
        <h1>
          Alert App
        </h1>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => showAlert({
              alertType: button.alertType as any, // TODO: add type
              text: Math.random().toString(36).substring(7)
            })}
          >
            {button.text}
          </Button>
        ))}
        <div className="alerts">
          {alerts?.length ? (
            alerts.map((alert) => <Alert key={alert.id} {...alert} />)
          ) : (
            <p>
              No alerts
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
