import React from 'react';
import Picker from '../Picker';
import { ColorPickerContainer } from "../Styling"
const ColorPicker = ({ colors, setColors }) => {

  const handleChangeCompleteBackground = (color) => {
    setColors({
      ...colors,
      "background": color.hex
    });
  };
  const handleChangeCompletePrimary = (color) => {
    setColors({
      ...colors,
      "primary": color.hex
    });
  };
  const handleChangeCompleteSecondary = (color) => {
    setColors({
      ...colors,
      "secondary": color.hex
    });
  };

  return (
    <>
      <ColorPickerContainer>

        <Picker color={colors.background} onChange={handleChangeCompleteBackground} />
        <Picker color={colors.primary} onChange={handleChangeCompletePrimary} />
        <Picker color={colors.secondary} onChange={handleChangeCompleteSecondary} />

      </ColorPickerContainer>

    </>
  )

}




export default ColorPicker;