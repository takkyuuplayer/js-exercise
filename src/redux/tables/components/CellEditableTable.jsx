import React from 'react';

const CellEditableTable = ({
  rowSize,
  colSize,
  cellEditable,
  onCellEdit,
}) => {
  const cells = Array(rowSize).fill(Array(colSize).fill(''));
  const nodes = cells.map((row, rowIdx) => {
    const cols = row.map((val, colIdx) => cellEditable
      ? (<td key={colIdx}><input type="text" value={val}
          onChange={(e) => { onCellEdit(e.target.value); }} /></td>)
      : (<td key={colIdx}>{val}</td>),
    );
    return <tr key={rowIdx}>{cols}</tr>;
  });

  return (
    <table>
      <tbody>
        {nodes}
      </tbody>
    </table>
  );
};

export default CellEditableTable;
