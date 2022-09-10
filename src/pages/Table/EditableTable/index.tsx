import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlus,
  faXmark,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import faker from "faker";

interface ITableProps extends Record<string, any> {
  headerText: string;
  columnName: string;
  sortable: boolean;
  searchable: boolean;
  exportable: boolean;
}

function EditableTable() {
  const columnHeaders = ["Name", "Age", "Gender"];
  const [data, setData] = useState<
    { name: string; age: string; gender: string }[]
  >([]);
  const [addDataState, setAddDataState] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const columns: ITableProps[] = [];
  columnHeaders.forEach((columnHeader) => {
    columns.push({
      headerText: columnHeader,
      columnName: columnHeader.toLowerCase().replace(/\s/g, ""),
      sortable: true,
      searchable: true,
      exportable: true,
    });
  });
  columns.push({
    headerText: "",
    columnName: "",
    sortable: false,
    searchable: false,
    exportable: false,
  });

  useEffect(() => {
    const arrToLoad: { name: string; age: string; gender: string }[] = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
      const newData = {
        name: faker.name.firstName(),
        age: faker.random.number(50).toString(),
        gender: faker.name.gender(),
      };
      arrToLoad.push(newData);
    });
    setData(arrToLoad);
  }, []);

  const handleAddClick = () => {
    // setData([{name: '', age: 0, gender: ''}, ...data,]);
    setAddDataState(true);
  };

  const handleCancelClick = () => {
    // setData([{name: '', age: 0, gender: ''}, ...data,]);
    setAddDataState(false);
  };

  const handleAddData = () => {
    if (name === "" || age === "" || gender === "") {
      return;
    } else {
      setAddDataState(false);
      setData([{ name, age, gender }, ...data]);
      setName("");
      setAge("");
      setGender("");
    }
  };

  const handleExport = () => {
    const exportableColumns = columns.filter((c) => c.exportable);

    let csv = "";
    exportableColumns.forEach(({ headerText }) => (csv += headerText + ","));
    csv = csv.slice(0, csv.length - 1) + "\n";

    data.forEach((d) => {
      let rowData = "";
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      // exportableColumns.forEach(
      //   ({ columnName }) => (rowData += `${d[columnName]} ,`)
      // );
      csv += rowData.slice(0, rowData.length - 1) + "\n";
    });

    const link = document.createElement("a");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "export.csv");
    link.click();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div>
        <button
          style={{
            width: "130px",
            outline: "none",
            padding: "10px 10px",
            borderRadius: "5px",
            backgroundColor: "#27496D",
            border: "none",
            color: "#ffffff",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: "500",
            marginRight: "10px",
          }}
          onClick={handleExport}
        >
          Export Report{" "}
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faFileCsv} />
        </button>
        <button
          style={{
            width: "70px",
            outline: "none",
            padding: "10px 10px",
            borderRadius: "5px",
            backgroundColor: "#142850",
            border: "none",
            color: "#ffffff",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: "500",
          }}
          onClick={handleAddClick}
          disabled={addDataState}
        >
          Add <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
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
            {columns.map((header, idx) => (
              <th style={{ padding: "12px 15px" }}>{header.columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {addDataState && (
            <tr
              style={{ borderBottom: "1px solid #dddddd", textAlign: "center" }}
            >
              <td style={{ padding: "12px 15px" }}>
                <input
                  name="name"
                  style={{ width: "60%", padding: "5px 15px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td style={{ padding: "12px 15px" }}>
                <input
                  name="age"
                  style={{ width: "60%", padding: "5px 15px" }}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
              <td style={{ padding: "12px 15px" }}>
                <input
                  name="gender"
                  style={{ width: "60%", padding: "5px 15px" }}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </td>
              <td style={{ padding: "12px 15px" }}>
                <button
                  style={{
                    outline: "none",
                    padding: "7px",
                    borderRadius: "7px",
                    backgroundColor: "#009879",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: "500",
                    marginRight: "15px",
                  }}
                  onClick={handleAddData}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  style={{
                    outline: "none",
                    padding: "7px 9px",
                    borderRadius: "7px",
                    backgroundColor: "#FF0028FF",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  onClick={handleCancelClick}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </td>
            </tr>
          )}
          {data.map((tableData) => (
            <tr
              style={{ borderBottom: "1px solid #dddddd", textAlign: "center" }}
            >
              <td style={{ padding: "12px 15px" }}>{tableData.name}</td>
              <td style={{ padding: "12px 15px" }}>{tableData.age}</td>
              <td style={{ padding: "12px 15px" }}>{tableData.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditableTable;
