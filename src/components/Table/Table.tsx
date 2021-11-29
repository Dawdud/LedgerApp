import { useTable } from "react-table";
import { LedgerModel } from "../../models/LedgerModel";
export const Table = ({
  columns,
  data,
}: {
  columns: any[];
  data: LedgerModel[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table className="Table" {...getTableProps()}>
      <thead className="Table__Head">
        {headerGroups.map((headerGroup) => (
          <tr className="Table__Row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="Table__Header" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="Table__Body" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="Table__Row" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="Table__Cell" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
