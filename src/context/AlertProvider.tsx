// Context
import { useReducer } from "react";
import { AlertContext, AlertInterface } from "./context";

export interface AlertProviderProps {
  children: React.ReactNode;
}

type AlertAction = {
  type: "SHOW_ALERT";
  payload: AlertInterface;
} | {
  type: "HIDE_ALERT";
  payload: string
}

export const AlertProvider = ({ children }: AlertProviderProps) => {

  const initialAlertState: AlertInterface[] = [];

  const alertReducer = (state: AlertInterface[], action: AlertAction) => {
    switch (action.type) {
      case "SHOW_ALERT":
        return [
          ...state,
          action.payload
        ];
      case "HIDE_ALERT":
        return state.filter(
          (alert) => alert.id !== action.payload
        );
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(alertReducer, initialAlertState);

  const showAlert = (alert: AlertInterface) => {
    if (!alert.id) {
      alert.id = Math.random().toString(36).substring(2, 9);
    }
    dispatch({ type: "SHOW_ALERT", payload: alert });
  }

  const hideAlert = (id: string) => {
    dispatch({ type: "HIDE_ALERT", payload: id });
  }

  return (
    <AlertContext.Provider value={{
      alerts: state,
      showAlert,
      hideAlert
    }}>
      {children}
    </AlertContext.Provider>
  );
};