import React from 'react';
import Field from './Field'
import styled from 'styled-components'
import Player from "./Player"

import {Helmet} from "react-helmet";
import InputForm from "./components/Input"
import {Main} from "./components/Styling"


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




  return <Main><FootballField><Field />


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


  <InputForm animation={animation} singleRole={singleRole} roles={roles} sliderValue={sliderValue} selectedRoles={selectedRoles} onRemoveItem={onRemoveItem} onClearRoles={onClearRoles}  handleClick={handleClick}  setSingleRole={setSingleRole}  handleSliderChange={handleSliderChange}  handleChange={handleChange}/>


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
  </Main>

}



const FootballField = styled.div`
position: relative;
width: 50%;
@media only screen and (max-width: 768px) {
  width: 100%;

}
`






export default App