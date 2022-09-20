import { useState } from "react"

// Material-UI
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

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
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Show Alert
        </Button>
      </FormControl>
    </Box>
  )
}