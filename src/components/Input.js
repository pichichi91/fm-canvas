import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Center, StyledButton, StyledTextField, StyledSwitch } from "./Styling"
import RolesList from './RolesList';
import styled from 'styled-components'


function InputForm({...props}) {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff'
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Center>
        <FormControlLabel
          control={
            <StyledSwitch
              checked={props.animation}
              onChange={props.handleChange}
              name="checked"
              color="primary"
            />
          }
          label={<span style={{ fontSize: '2rem', color: "white" }}>Show Player Movements</span>}

        />
        <PositionWrapper>
          <Slider value={props.sliderValue} onChange={props.handleSliderChange} aria-labelledby="continuous-slider" />
        </PositionWrapper>
        <PositionWrapper>

          <Autocomplete
            id="role"
            options={props.roles}
            className="first-element"
            value={props.singleRole}
            onChange={(event, newValue) => {
              props.setSingleRole(newValue);



            }}
            style={{ width: 300, paddingBottom: "1em" }}
            renderInput={(params) => <StyledTextField {...params}
              label="Role" variant="outlined" />}
          />

        </PositionWrapper>
        <PositionWrapper>
          <StyledButton
            variant="outlined"
            size="large"
            color="primary"

            startIcon={<AddIcon />}
            onClick={props.handleClick}
            disabled={props.singleRole === ""}
          >
            Add to Pitch
</StyledButton>
          <StyledButton
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<ClearIcon />}
            onClick={props.onClearRoles}
            style={{ marginLeft: "1em" }}
          >
            Clear Roles
</StyledButton>

        </PositionWrapper>



        <RolesList onRemoveItem={props.onRemoveItem} selectedRoles={props.selectedRoles} />

      </Center>
    </MuiThemeProvider>

  );

}

const PositionWrapper = styled.div`
display: flex;
margin-top: 1em;

.first-element {
  margin-right: 2em;
}
@media only screen and (max-width: 700) {
flex-wrap: wrap
> div {
  width: 100%
}

`



export default InputForm;
