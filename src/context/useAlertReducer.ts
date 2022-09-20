import { useContext } from 'react';
import { AlertContext } from './context';

export const useAlertReducer = () => useContext(AlertContext);
