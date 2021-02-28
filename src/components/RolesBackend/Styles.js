import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';


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