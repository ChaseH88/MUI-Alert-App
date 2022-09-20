import { createContext } from "react";
import { AlertInterface } from '@types'

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
