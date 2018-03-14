import React from 'react';
import './AddGameForm.css';

const GameDetail = props => {
  return (
    <div className="AddGameForm">
      <input onChange={(e) => props.onNameChange(e)} value={props.nameVal} id="name" name="name" placeholder="Enter game name..." />
      <input onChange={(e) => props.onMinChange(e)} value={props.minVal} id="min" name="min" placeholder="Enter minimum players..." />
      <input onChange={(e) => props.onMaxChange(e)} value={props.maxVal} id="max" name="max" placeholder="Enter maximum players..." />
      <button type="submit" onClick={(e) => props.onSubmit(e)}>Submit</button>
    </div>
  )
}

export default GameDetail;
