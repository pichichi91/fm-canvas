import Player from "./Player"


const PlayerList = ({ colors, selectedRoles, animation, speed }) => {

  return (
    <>
      {selectedRoles.map((role, index) => (
        <Player speed={speed} key={index} startX={role.startX} startY={role.startY} endX={role.endX} endY={role.endY} animation={animation} colors={colors} />

      ))

      }

    </>
  )

}

export default PlayerList;