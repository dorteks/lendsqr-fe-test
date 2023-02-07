import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import dataMock from "./data.mock.json";
import styles from "./table.module.scss";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataMock, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.container}>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  className={styles.tableHead}
                  {...column.getHeaderProps()}
                  key={index}
                >
                  {column.render("Header")}
                  <img src="/images/filter-results-button.svg" />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps} key={index}>
                      <div className={styles.tableData}>
                        {cell.render("Cell")}{" "}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
