import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Center, StyledButton, StyledSwitch } from "./Styling"
import RolesList from './RolesList';
import styled from 'styled-components'
import ColorPicker from "./ColorPicker"
import React from 'react';


function InputForm({ colors, setColors, ...props }) {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Center colors={colors}>


        <FormControlLabel
          control={
            <StyledSwitch colors={colors}
              checked={props.animation}
              onChange={props.handleChange}
              name="checked"
              color="primary"
            />
          }
          label={<span style={{ fontSize: '2rem', color: colors.primary }}>Show Player Movements</span>}

        />
        <PositionWrapper>
          <div className="direction-column">
            <h2>Colors</h2>
            <ColorPicker colors={colors} setColors={setColors} />
          </div>
        </PositionWrapper>
        <PositionWrapper>
          <div className="direction-column">

            <h2>Add Players</h2>
            <div style={{display: "flex", alignItems: "center"}}>
              <Autocomplete colors={colors}
                id="role"
                options={props.roles}
                className="first-element"
                value={props.singleRole}
                color="primary"
                getOptionLabel={(option) => option.role}
                renderOption={(option) => (
                  <React.Fragment>
                    <div display={{ display: "flex" }}>
                      <div style={{ fontWeight: "bold", paddingRight: "0.5em" }}>{option.role}</div> <div style={{ fontSize: "0.6em" }}> <strong>Duty</strong>: {option.duty}, <strong>Position</strong>: {option.position}  </div>
                    </div>
                  </React.Fragment>
                )}
                onChange={(event, newValue) => { props.setSingleRole(newValue) }}
                style={{ width: "50%" }}
                renderInput={(params) => <TextField {...params}
                  label="Role" variant="outlined" color="primary" />}
              />
              <div style={{display: "flex"}}>
                <a target="_blank" style={{ color: colors.secondary, fontWeight: "bold", fontSize: "1.2em", textDecoration: "auto" }} href="/roles">Add More Roles?</a>
              </div>
            </div>
          </div>
        </PositionWrapper>

        <PositionWrapper>


          <StyledButton colors={colors}
            variant="outlined"
            size="large"
            color="primary"

            startIcon={<AddIcon />}
            onClick={props.handleClick}
            disabled={props.singleRole === ""}
          >
            Add to Pitch
</StyledButton>
          <StyledButton colors={colors}
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


        <h2>Players on Pitch</h2>

        <RolesList colors={colors} onRemoveItem={props.onRemoveItem} selectedRoles={props.selectedRoles} />

      </Center>
    </MuiThemeProvider>

  );

}

const PositionWrapper = styled.div`
display: flex;
margin-top: 1em;

@media only screen and (max-width: 700) {

justify-content: center;
}

.direction-column{
  flex-direction: column;
  width: 100%;
}


h2 {
  margin-top: 0em;
}

.full-width {
  width:100%;
  flex-basis: 100%
}

.first-element {
  margin-right: 2em;
}
@media only screen and (max-width: 700) {
flex-wrap: wrap;

> div {
  width: 100%
}


`



export default InputForm;
