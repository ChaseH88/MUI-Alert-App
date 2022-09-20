export const formInputs = [
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
    label: "Time Limit (seconds)",
    name: "timeLimit",
    type: "number",
  }
];
