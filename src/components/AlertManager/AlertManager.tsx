import { useState } from "react"

// Material-UI
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MuiButton, { ButtonProps } from '@mui/material/Button';

// Styles
import { TextField, Select, Button } from './styles';

// Context
import { AlertInterface } from "../../context/Alert/context"
import { useAlertReducer } from "../../context/Alert/useAlertReducer";

const defaultAlert: AlertInterface = {
  alertType: "success",
  alertTitle: "",
  text: "",
  link: "",
  timeLimit: 10,
}

const formInputs = [
  {
    label: "Alert Type",
    name: "alertType",
    type: "select",
    options: [
      {
        value: "success",
        label: "Success",
      },
      {
        value: "error",
        label: "Error",
      },
      {
        value: "warning",
        label: "Warning",
      },
      {
        value: "info",
        label: "Info",
      },
    ],
  },
  {
    label: "Alert Title",
    name: "alertTitle",
    type: "text",
  },
  {
    label: "Text",
    name: "text",
    type: "text",
  },
  {
    label: "Link",
    name: "link",
    type: "text",
  },
  {
    label: "Time Limit (seconds)",
    name: "timeLimit",
    type: "number",
  }
];

const exampleButtons: { label: string, color: string, alert: AlertInterface }[] = [
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

export const AlertManager = () => {

  const { showAlert } = useAlertReducer();
  const [alert, setAlert] = useState<AlertInterface>(defaultAlert);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAlert({
      ...alert,
      [name]: value,
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showAlert({
      ...alert,
      timeLimit: alert.timeLimit! * 1000,
    });
    setAlert(defaultAlert);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <FormControl>
        {formInputs.map((input, index) => (
          input.type === "select" ? (
            <Select
              name={input.name}
              key={index}
              label={input.label}
              value={alert[input.name! as keyof AlertInterface] as string}
              onChange={handleChange as any}
            >
              {input.options?.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <TextField
              name={input.name}
              key={index}
              label={input.label}
              value={alert[input.name! as keyof AlertInterface] as number | string}
              onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
              type={input.type}
            />
          )
        ))}
        <MuiButton
          variant="contained"
          onClick={handleSubmit}
        >
          Show Alert
        </MuiButton>
      </FormControl>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 2fr)',
          gridGap: 10,
          marginTop: 5,
          maxWidth: 500,
          margin: '2em auto 0',
        }}
      >
        {exampleButtons.map(({ color, alert, label }, index) => (
          <Button
            key={`${color}-${index}`}
            variant="contained"
            color={color as ButtonProps["color"]}
            onClick={() => {
              showAlert(alert)
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  )
}