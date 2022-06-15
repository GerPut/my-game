import './Game.css';
import GamePlay from './GamePlay';
import Nav from "./Nav.js"

function Game() {
  return (
    <div className="Game">
      <Nav />
      <GamePlay />
    </div>
  );
}

export default Game;
