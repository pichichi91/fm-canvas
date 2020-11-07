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

.MuiInputBase-input, .MuiInputLabel-formControl, .MuiIconButton-label{
  color: ${props => props.colors.primary};
}

.MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline  {
  border-color: ${props => props.colors.primary}
}

.Mui-checked .MuiSwitch-thumb, .MuiSelect-icon  {
  color: ${props => props.colors.primary};

}
.Mui-checked .MuiSwitch-thumb{
  color: ${props => props.colors.secondary};

}


`

export const StyledButton = withStyles({
  root: {
    '& span': {
      fontSize: "1.2em"

    },
    '& .MuiTypography-body1': {
      fontSize: "1.5em"

    },

  }
})(Button)


export const StyledSwitch = withStyles({
  root: {
    '& span': {
      fontSize: "2em"

    },
    '& .MuiTypography-body1': {
      fontSize: "2em"

    },
    '&  .MuiFormControlLabel-root': {
      marginBottom: "1em"
    }
  }
})(Switch)



export const Main = styled.div`
height: 92.9vh;

position: relative;
padding: 2em;
display: flex;
justify-content: space-evenly;
color: ${props => props.colors.primary};
background-color: ${props => props.colors.background};


canvas {
        width: 40vw !important;
        height: 90vh !important;;
        display: block;
      }
@media only screen and (max-width: 768px) {
  flex-wrap: wrap;
  canvas {
    width: 86vw !important;
    height: 90vh !important;
  }
}
`

export const FootballField = styled.div`
position: relative;
width: 50%;
@media only screen and (max-width: 768px) {
  width: 100%;

}
`

export const Footer = styled.div`
height: 100vh;
padding: 2em;
color: ${props => props.colors.primary};
background-color: ${props => props.colors.background};

`

export const ColorPickerContainer = styled.div`
display:flex;
> div {
  margin-right: 1em;
}

`