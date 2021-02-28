import React, { useEffect, useState } from 'react';
import Field from './components/Field'
import InputForm from "./components/Input/InputForm"

import Header from "./components/Header"
import { Main, FootballField } from "./components/Styling"
import PlayerList from './components/PlayerList';
import RolesDefinitions from "./components/RolesBackend/RolesDefinitions"

import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import usePersistedState from "./hooks/usePersistedState.js";

function App() {

  useEffect(() => {
    if (window.location.href.replace(window.location.origin, '') === "/") {
      document.body.style.backgroundColor = colors.background;
    } else {
      document.body.style.backgroundColor = "#321450";
    }
  });

  const [animation, setAnmiation] = usePersistedState('animation', false);
  const [singleRole, setSingleRole] = usePersistedState('singleRole', "");
  const [selectedRoles, setSelectedRoles] = usePersistedState('selectedRoles', []);
  const [colors, setColors] = usePersistedState('colors', { "primary": "#fff", "background": "#321450", "secondary": "#d2ff00" });
  const [roles, setRoles] = usePersistedState('roles', []);

  const [speed, setSpeed] = useState(1);

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
            <PlayerList speed={speed} colors={colors} selectedRoles={selectedRoles} animation={animation} />
          </FootballField>
          <InputForm speed={speed} setSpeed={setSpeed} colors={colors} setColors={setColors} animation={animation} singleRole={singleRole} roles={roles} selectedRoles={selectedRoles} onRemoveItem={onRemoveItem} onClearRoles={onClearRoles} handleClick={handleClick} setSingleRole={setSingleRole} handleChange={handleChange} />


        </Route>
        <Route exact path="/roles">
          <RolesDefinitions colors={colors} roles={roles} setRoles={setRoles} />
        </Route>
        <Route path="/roles/data">
          <div><pre>{JSON.stringify(roles, null, 2)}</pre></div>
        </Route>

      </Switch>


    </Main>
  </HelmetProvider>
  </Router>

}









export default App