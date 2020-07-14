import React, {Component} from 'react';
import './Line.css'
import Square from './Square'

class Line extends Component
{
  constructor()
  {
    super()
  }
  render()
  {    
    let lines = [<Square />, <Square />, <Square />]
    return(
      <div class="line">             
         {lines}
      </div>
    )
  }
}

export default Line;
