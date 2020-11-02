
import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const Picker = ({ color, onChange }) => {

  const [state, setState] = useState({displayColorPicker: false,
    "color": color});

  const handleClick = () => {
    setState({...state, displayColorPicker: !state.displayColorPicker })
  };

  const handleClose = () => {
    setState({...state, displayColorPicker: false })
  };

  const handleChange = (color) => {

    setState({
        ...state,
        "color": color.hex
      });

      onChange(color)
  };

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${state.color}`,
        },
        swatch: {
          padding: '5px',
          borderRadius: '3px',
          border: "1px solid",
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ handleClick }>
          <div style={ styles.color } />
        </div>
        { state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ handleClose }/>
          <SketchPicker color={ state.color } onChange={ handleChange } />
        </div> : null }

      </div>
    )
  
}

export default Picker