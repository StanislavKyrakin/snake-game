import Square from './Square';

function Board() {

  let squares = [];

  for(let y = 0; y < 10; y++){
    for(let x = 0; x < 10; x++){
      squares.push({x, y, index: Math.random()});
    }
  }

  return (
    <div className="Board">
      {squares.map(square => {
        return (
          <span key={square.index}>
            <Square square={square} />
          </span>
        );
      })}
    </div>
  );
}

export default Board;