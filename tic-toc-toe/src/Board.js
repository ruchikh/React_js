import React, { Component } from 'react';
import Square from './Square.js';
import calculateWinner from './checkWinner.js';




export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: []
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    this.state.history.push(this.state.squares);

    if(calculateWinner(squares) || squares[i]){
      return 
    }
    squares[i] = this.state.xIsNext ? 'X' : '0';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext

    });
  }

  handleHistory = () => {
    this.setState({
      squares: this.state.history.pop() || this.state.history,
      xIsNext: !this.state.xIsNext  
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
  	const winner = calculateWinner(this.state.squares);
  	let status;
  	if(winner){
      status = alert("winner is  :-  " + winner)
  		status = 'winner is  :- ' + winner;
      this.setState({
        squares: Array(9).fill(null),
        xIsNext: true
      });
    }else{    
      status = 'Next player :- ' + (this.state.xIsNext ? 'X' : '0');
    }


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>

        <div>
         <button className="htr-btn" onClick={this.handleHistory}>History</button>
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>

      </div>
    );
  }
}




