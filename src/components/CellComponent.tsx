import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div className={['cell', selected ? 'selected' : cell.color].join(' ')} onClick={() => click(cell)}>
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}

export default CellComponent;