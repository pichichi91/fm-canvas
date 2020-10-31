import React, { useState } from 'react';
import Field from './Field'
import styled from 'styled-components'
import Player from "./Player"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';



function App() {


  const roles = [
    'Sweeper Keeper',
    'Goalkeeper',
    'Central Defender',
    'Ball Playing Defender',
    'Libero',
    'No Nonsense Central Defender',
    'Fullback',
    'Wingback',
    'Inverted Wingback',
    'Complete Wingback',
    'Segundo Volante',
    'Anchor Man',
    'Regista',
    'Defensive Midfielder',
    'Ball Winning Midfielder',
    'Roaming Playmaker',
    'Wide Target Man',
    'Raumdeuter',
    'Inside forward ',
    'Inverted Winger'];
  const options = ['Option 1', 'Option 2'];

  const [state, setState] = useState({
    checked: false,
    slider: 0,
    role: '',
    roles: []
  });

  const onClearRoles = () => {
    setState({ roles: [] });
  };


  const handleChange = (event, newValue) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const handleClick = () => {
    setState({ ...state, roles: state.roles.concat(state.role) });
  }





  return <CanvasWrapper><FootballField><Field />

    <Player startX={400} startY={1200} endX={500} endY={1000} animation={state.checked}></Player>
    <Player startX={100} startY={800} endX={500} endY={100} animation={state.checked}></Player>
    <Player startX={250} startY={1000} endX={500} endY={700} animation={state.checked}></Player>
    <Player startX={550} startY={1000} endX={500} endY={700} animation={state.checked}></Player>
    <Player startX={700} startY={800} endX={500} endY={100} animation={state.checked}></Player>


    <Player startX={550} startY={800} endX={500} endY={300} animation={state.checked}></Player>
    <Player startX={250} startY={800} endX={500} endY={300} animation={state.checked}></Player>


    <Player startX={415} startY={600} endX={500} endY={500} animation={state.checked}></Player>



    <Player startX={415} startY={400} endX={500} endY={100} animation={state.checked}></Player>
    <Player startX={530} startY={400} endX={500} endY={100} animation={state.checked}></Player>
    <Player startX={300} startY={400} endX={500} endY={100} animation={state.checked}></Player>
  </FootballField>
    <Center>


      <FormControlLabel
        control={
          <CssSwitch
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={<span style={{ fontSize: '2rem', color: "white" }}>Show Player Movements</span>}

      />
      <PositionWrapper>

        <Autocomplete
          id="role"
          options={roles}
          className="first-element"
          value={state.role}
          onChange={(event, newValue) => {
            setState({ ...state, role: newValue });



          }}
          style={{ width: 300, paddingBottom: "1em" }}
          renderInput={(params) => <CssTextField {...params}
            label="Role" variant="outlined" />}
        />

      </PositionWrapper>
      <PositionWrapper>

        <CSSButon
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          Add to Pitch
    </CSSButon>
      </PositionWrapper>

      <PlayerList> <ol>
      {state.roles.map(role => (
            <li key={role}> {role} </li>
          ))}
      </ol></PlayerList>

    </Center>

  </CanvasWrapper>

}

const PlayerList = styled.div`

color: white;
    font-size: 1.5em;

    ol { 
    counter-reset: item;
    list-style-type: none;
    padding-left: 0em;
}
li { display: block; }
li:before { 
    content: counter(item) "  "; 
    counter-increment: item;
    font-weight: bold;
    color: #d2ff00;
    width: 1em;
    padding-right: 0.4em;
    text-align: right

}
li:nth-child(-n+9):before {
  padding-right: 1em;

}
`

const FootballField = styled.div`
position: relative;
width: 50%;
@media only screen and (max-width: 768px) {
  width: 100%;

}
`

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
const Center = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
@media only screen and (max-width: 768px) {

order: -1;
width: 100%;
}
`

const CSSButon = withStyles({
  root: {
    '& span': {
      color: "white",
      fontSize: "1.2em"

    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "white"
    },
    '& .MuiTypography-body1': {
      fontSize: "1.5em"

    },
    '&  .MuiButton-root': {
      border: "1px solid white;"
    }
  }
})(Button)


const CssSwitch = withStyles({
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

const CssTextField = withStyles({
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




const positions = [
  'DM'];

const CanvasWrapper = styled.div`

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



/*canvas { display: block; width: 60vw; height: 65vh; }*/


export default App