import React, { useState } from 'react';
import CellComponent from './CellComponent';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
    function click(cell: Cell) {
        setSelectedCell(cell);
    }
    return (
        <div className='board'>
            {board.cells.map((row: Cell[], index: number) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            cell={cell}
                            key={cell.id} />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;
