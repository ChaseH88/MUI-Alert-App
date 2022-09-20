import { AlertInterface } from "../../context/Alert/context"

export const exampleButtons: { label: string, color: string, alert: AlertInterface }[] = [
  {
    label: "Success",
    color: "success",
    alert: {
      alertType: "success",
      alertTitle: "Success",
      text: "This is a success alert",
      link: "",
      timeLimit: 10 * 1000,
    },
  },
  {
    label: "Error",
    color: "error",
    alert: {
      alertType: "error",
      alertTitle: "Error",
      text: "This is an error alert",
      link: "",
      timeLimit: 10 * 1000,
    },
  },
  {
    label: "Warning",
    color: "warning",
    alert: {
      alertType: "warning",
      alertTitle: "Warning",
      text: "This is a warning alert",
      link: "",
      timeLimit: 10 * 1000,
    },
  },
  {
    label: "Info",
    color: "info",
    alert: {
      alertType: "info",
      alertTitle: "Info",
      text: "This is an info alert",
      link: "",
      timeLimit: 10 * 1000,
    },
  }
]
