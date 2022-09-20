import { createContext } from "react";

export interface AlertInterface {
  text: string
  alertTitle: string
  alertType: 'error' | 'warning' | 'info' | 'success'
  timeLimit?: number
  link?: string
  id?: string
}

export interface AlertContextProps {
  alerts: AlertInterface[]
  showAlert: (alert: AlertInterface) => void
  hideAlert: (id: string) => void
}

export const AlertContext = createContext<AlertContextProps>({
  alerts: [],
  showAlert: () => { },
  hideAlert: () => { }
});
