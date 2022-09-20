export interface AlertInterface {
  text: string
  alertTitle: string
  alertType: 'error' | 'warning' | 'info' | 'success'
  timeLimit?: number
  link?: string
  id?: string
}
