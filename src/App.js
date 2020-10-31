import React from 'react';
import Field from './Field'
import styled from 'styled-components'
import Player from "./Player"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {Helmet} from "react-helmet";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  }
});

function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

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




  const [animation, setAnmiation] = usePersistedState('animation', false);
  const [singleRole, setSingleRole] = usePersistedState('singleRole', "");
  const [selectedRoles, setSelectedRoles] = usePersistedState('selectedRoles', []);

  const [sliderValue, setSliderValue] = usePersistedState('sliderValue', 30);


  const onClearRoles = () => {
    setSelectedRoles([]);
  };


  const handleChange = (event, newValue) => {
    setAnmiation(event.target.checked);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue)
  };

  const handleClick = () => {
    if (singleRole !== "") {


      setSelectedRoles(selectedRoles => ([...selectedRoles, singleRole]));
    }
  }

  const onRemoveItem = index => {

    setSelectedRoles([...selectedRoles.slice(0, index), ...selectedRoles.slice(index + 1)])


  };




  return <CanvasWrapper><FootballField><Field />


    {selectedRoles.map((role) => (
      <Player id={role} startX={250} startY={1000} endX={500} endY={700} animation={animation}></Player>

    ))

    }
      <Player startX={400} startY={1200} endX={500} endY={1000} animation={animation}></Player>
    <Player startX={100} startY={800} endX={500} endY={100} animation={animation}></Player>
    <Player startX={250} startY={1000} endX={500} endY={700} animation={animation}></Player>
    <Player startX={550} startY={1000} endX={500} endY={700} animation={animation}></Player>
    <Player startX={700} startY={800} endX={500} endY={100} animation={animation}></Player>
    <Player startX={550} startY={800} endX={500} endY={300} animation={animation}></Player>
    <Player startX={250} startY={800} endX={500} endY={300} animation={animation}></Player>
    <Player startX={415} startY={600} endX={500} endY={500} animation={animation}></Player>
    <Player startX={415} startY={400} endX={500} endY={100} animation={animation}></Player>
    <Player startX={530} startY={400} endX={500} endY={100} animation={animation}></Player>
    <Player startX={300} startY={400} endX={500} endY={100} animation={animation}></Player>
  </FootballField>
    <MuiThemeProvider theme={theme}>

      <Center>


        <FormControlLabel
          control={
            <CssSwitch
              checked={animation}
              onChange={handleChange}
              name="checked"
              color="primary"
            />
          }
          label={<span style={{ fontSize: '2rem', color: "white" }}>Show Player Movements</span>}

        />
        <PositionWrapper>
          <Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
        </PositionWrapper>
        <PositionWrapper>

          <Autocomplete
            id="role"
            options={roles}
            className="first-element"
            value={singleRole}
            onChange={(event, newValue) => {
              setSingleRole(newValue);



            }}
            style={{ width: 300, paddingBottom: "1em" }}
            renderInput={(params) => <CssTextField {...params}
              label="Role" variant="outlined" />}
          />

        </PositionWrapper>
        <PositionWrapper>
          <CSSButon
            variant="outlined"
            size="large"
            color="primary"

            startIcon={<AddIcon />}
            onClick={handleClick}
            disabled={singleRole === ""}
          >
            Add to Pitch
    </CSSButon>
          <CSSButon
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<ClearIcon />}
            onClick={onClearRoles}
            style={{ marginLeft: "1em" }}
          >
            Clear Roles
    </CSSButon>

        </PositionWrapper>



        <PlayerList> <ol>
          {selectedRoles.map((role, index) => (
            <li key={index}> {role}

              <CSSButon onClick={() => { onRemoveItem(index) }} ><ClearIcon style={{ color: "red", paddingLeft: "0.5em", position: "relative" }} /></CSSButon>



            </li>
          ))}
        </ol></PlayerList>

      </Center>
    </MuiThemeProvider>

<Helmet>
<meta name="og:title" content="FMCanvas | Movement of Tactical Roles in Football"/>
<meta name="og:description" content="This react based WebApp, tries to replicate movement of the available Roles in Football Manager"/>
<meta name="twitter:title" content="FMCanvas | Movement of Tactical Roles in Football"/>
<meta name="twitter:description" content="This react based WebApp, tries to replicate movement of the available Roles in Football Manager"/>
<meta name="og:image" content="https://fm-canvas.vercel.app/showcase.PNG"/>
<meta name="twitter:image" content="https://fm-canvas.vercel.app/showcase.PNG"/>
<meta name="twitter:card" content="summary_large_image" data-react-helmet="true"></meta>
<meta name="og:url" content="https://fm-canvas.vercel.app" data-react-helmet="true"></meta>
</Helmet>
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

export default App