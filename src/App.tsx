// Components
import Button from '@mui/material/Button';

// Styles
import './App.css';

// Hooks
import { useAlertReducer } from './context/Alert/useAlertReducer';


function App() {

  const { showAlert, hideAlert, alerts } = useAlertReducer();

  return (
    <div id="app">
      <div className="container">
        <h1>
          Alert App
        </h1>
        <Button
          variant="contained"
          onClick={() => showAlert({
            alertType: "success",
            text: Math.random().toString(36).substring(2, 9)
          })}
        >
          Show Alert
        </Button>
        <div className="alerts">
          {alerts?.length ? (
            alerts.map((alert) => (
              <div className="alert" key={alert.id}>
                <p>
                  {alert.text}
                </p>
                <button onClick={() => hideAlert(alert.id!)}>
                  X
                </button>
              </div>
            ))
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
