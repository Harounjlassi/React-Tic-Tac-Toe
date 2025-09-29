import { useState } from "react";
export default function Player({ name, symbol ,isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleSetIsEditing() {
    setIsEditing((isEditing) => !isEditing);
    //setIsEditing(!isEditing);
  }
  function setPlayerNameValue(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={ isActive?'active':undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        
        {isEditing && <input type="text" required value={playerName}  onChange={setPlayerNameValue} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleSetIsEditing()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
