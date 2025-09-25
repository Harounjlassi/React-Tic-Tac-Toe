import { useState } from "react"

export default function Player({ name, symbol , isActive}) {
  const [playerName, setPlayerName] = useState(name);
  //array destructuring
    const [isEditing, setIsEditing] = useState(false);
    function handleNameChange() {
      console.log("clicked");
      //best way to update state when it depends on previous state
        setIsEditing((prev) => !prev);
    
      }
      function handleChange(e) {
        setPlayerName(e.target.value);
      }
      let editablePlayerName =   <span className="play-name" >{playerName}</span>;
      if (isEditing) {
        //two way binding
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
      }
    return (
           <li className={isActive ? "active" : "player"}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleNameChange}>{isEditing ? "Save" : "Edit"}</button>
          </li>

    )
  }