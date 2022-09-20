import styled, { css } from 'styled-components';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import MuiSelect from '@mui/material/Select';

const sharedStyles = css`
  margin: 0 0 1rem 0 !important; // override mui
  width: 25vw;
`;

export const TextField = styled(MuiTextField)`
  ${sharedStyles};
`;

export const Select = styled(MuiSelect)`
  ${sharedStyles};
`;

export const Button = styled(MuiButton)`
  width: 12.25vw;
`;