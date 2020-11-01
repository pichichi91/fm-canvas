import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';

import { Button } from '@material-ui/core';
import styled from 'styled-components'



export const Center = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
@media only screen and (max-width: 768px) {

order: -1;
width: 100%;
}
`

export const StyledButton = withStyles({
  root: {
    '& span': {
      color: "white",
      fontSize: "1.2em"

    },
    'button': {
      borderColor: "white"
    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "white"
    },
    '& .MuiTypography-body1': {
      fontSize: "1.5em"

    },
    '&  .MuiButton-sizeLarge': {
      border: "1px solid white;"
    }
  }
})(Button)


export const StyledSwitch = withStyles({
  root: {
    '& span': {
      color: "white",
      fontSize: "2em"

    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "white"
    },
    '& .MuiTypography-body1': {
      fontSize: "2em"

    },
    '&  .MuiFormControlLabel-root': {
      marginBottom: "1em"
    }
  }
})(Switch)

export const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiFormLabel-root, & .MuiInputBase-input, & .MuiIconButton-root ': {
      color: "white"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

export const Main = styled.div`

position: relative;
padding: 2em;
display: flex;
justify-content: space-evenly;

canvas {
        width: 40vw !important;
        height: 90vh !important;;
        display: block;
      }
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
  canvas {
    width: 86vw !important;
    height: 90vh !important;;
  }
}
`
