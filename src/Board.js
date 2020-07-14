import React, {Component} from 'react';
import './Board.css'
import Line from './Line'

class Board extends Component
{
  constructor()
  {
    super()
  }

  render()
  {
    let board = [<Line/>, <Line/>, <Line/>]

    return(
      <div class="board">             
        {board}
      </div>

    )
  }
}

export default Board;
