import React from 'react';
import Field from './components/Field'
import InputForm from "./components/Input"
import Header from "./components/Header"
import { Main, FootballField } from "./components/Styling"
import PlayerList from './components/PlayerList';


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




  return <Main>
    <Header />
    <FootballField>
      <Field />
      <PlayerList selectedRoles={selectedRoles} animation={animation}/>


    </FootballField>


    <InputForm animation={animation} singleRole={singleRole} roles={roles} sliderValue={sliderValue} selectedRoles={selectedRoles} onRemoveItem={onRemoveItem} onClearRoles={onClearRoles} handleClick={handleClick} setSingleRole={setSingleRole} handleSliderChange={handleSliderChange} handleChange={handleChange} />



  </Main>

}









export default App