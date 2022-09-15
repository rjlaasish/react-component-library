import React, { ReactChild, useState, useEffect } from "react";

type TableData<Data> = Partial<Record<keyof Data, unknown>>;
interface ITableProps<Data extends TableData<Data>> {
  columns: {
    headerText: string;
    columnName: string;
    sortable: boolean;
    searchable: boolean;
    exportable: boolean;
  }[];
  // tableDataMap is a function which accepts a Data object and returns a Table Row <Tr> element with nested <Td> elements
  tableDataMap: (value: Data, index: number) => ReactChild;
  data: Data[];
}

type SortType = "asc" | "desc" | "";

const Table = <Data extends TableData<Data>>({
  columns,
  data,
  tableDataMap,
}: ITableProps<Data>): JSX.Element => {
  const [sortedData, setSortedData] = useState<Data[]>([]);
  const [sortColumn] = useState("");
  const [sortDirection] = useState<SortType>("");
  useEffect(() => {
    sortSearchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, sortDirection, sortColumn]);

  const sortSearchData = () => {
    if (!data) {
      setSortedData([]);
      return;
    }
    let sortedData = data;
    setSortedData(sortedData);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          margin: "25px 0",
          fontSize: "0.9em",
          minWidth: "800px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        }}
        className="styled-table"
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#142850",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {columns.map(({ headerText, columnName, sortable }, idx) => (
              <th key={columnName} style={{ padding: "12px 15px" }}>
                {headerText}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{sortedData.map(tableDataMap)}</tbody>
      </table>
    </div>
  );
};

export default Table;
