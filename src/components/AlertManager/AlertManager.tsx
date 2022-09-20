import { useState } from "react"
import { AlertInterface } from "@types"

// Material-UI
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MuiButton, { ButtonProps } from '@mui/material/Button';

// Styles
import { TextField, Select, Button } from './styles';

// Context
import { useAlertReducer } from "../../context/Alert/useAlertReducer";

// static data
import { exampleButtons } from './example-buttons';
import { formInputs } from './form-inputs';
import { AlertContainer } from "../AlertContainer";

const defaultAlert: AlertInterface = {
  alertType: "success",
  alertTitle: "",
  text: "",
  link: "",
  timeLimit: 10,
}

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
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <AlertContainer />
      <FormControl>
        {formInputs.map(({ name, label, type, options }, index) => (
          type === "select" ? (
            <Select
              name={name}
              key={index}
              value={alert[name! as keyof AlertInterface] as string}
              onChange={handleChange as any}
            >
              {options?.map((option, index) => (
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
              name={name}
              key={index}
              label={label}
              value={alert[name! as keyof AlertInterface] as number | string}
              onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
              type={type}
            />
          )
        ))}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <MuiButton
            variant="contained"
            onClick={handleSubmit}
            sx={{
              flex: 1,
              margin: '0 .5em 0 0'
            }}
          >
            Show Alert
          </MuiButton>
          <MuiButton
            variant="contained"
            onClick={() => setAlert(defaultAlert)}
          >
            Reset
          </MuiButton>
        </Box>
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