import React, { useEffect } from 'react';
import Field from './components/Field'
import InputForm from "./components/Input"

import Header from "./components/Header"
import { Main, FootballField } from "./components/Styling"
import PlayerList from './components/PlayerList';
import RolesDefinitions from "./components/RolesDefinitions"

import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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


  useEffect(() => {
    document.body.style.backgroundColor = colors.background;

  });




  const [animation, setAnmiation] = usePersistedState('animation', false);
  const [singleRole, setSingleRole] = usePersistedState('singleRole', "");
  const [selectedRoles, setSelectedRoles] = usePersistedState('selectedRoles', []);
  const [colors, setColors] = usePersistedState('colors', { "primary": "#fff", "background": "#321450", "secondary": "#d2ff00" });

  const [roles, setRoles] = usePersistedState('roles', []);



  const onClearRoles = () => {
    setSelectedRoles([]);
  };


  const handleChange = (event, newValue) => {
    setAnmiation(event.target.checked);
  };



  const handleClick = () => {
    if (singleRole !== "") {
      setSelectedRoles(selectedRoles => ([...selectedRoles, singleRole]));
    }
  }

  const onRemoveItem = index => {
    setSelectedRoles([...selectedRoles.slice(0, index), ...selectedRoles.slice(index + 1)])
  };




  return <Router> <HelmetProvider>


    <Main colors={colors} >
      <Switch>
        <Route exact path="/">
          <FootballField >
            <Field colors={colors} />
            <Header colors={colors} />

            <PlayerList colors={colors} selectedRoles={selectedRoles} animation={animation} />


          </FootballField>


          <InputForm colors={colors} setColors={setColors} animation={animation} singleRole={singleRole} roles={roles} selectedRoles={selectedRoles} onRemoveItem={onRemoveItem} onClearRoles={onClearRoles} handleClick={handleClick} setSingleRole={setSingleRole} handleChange={handleChange} />


        </Route>
        <Route path="/roles">
          <RolesDefinitions colors={colors} roles={roles} setRoles={setRoles} />
        </Route>

      </Switch>


    </Main>
  </HelmetProvider>
  </Router>

}









export default App