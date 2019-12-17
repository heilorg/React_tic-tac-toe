import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

class Board extends React.Component {
    renderSqure(i){
        return <Square value={i} />;
    }

    render() {
        const status = "Next Player : X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSqure(0)}
                    {this.renderSqure(1)}
                    {this.renderSqure(2)}
                </div>
                <div className="board-row">
                    {this.renderSqure(3)}
                    {this.renderSqure(4)}
                    {this.renderSqure(5)}
                </div>
                <div className="board-row">
                    {this.renderSqure(6)}
                    {this.renderSqure(7)}
                    {this.renderSqure(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => alert("click")}>
                {this.props.value}
            </button>
        )
    }
}

class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{/* todo */}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);