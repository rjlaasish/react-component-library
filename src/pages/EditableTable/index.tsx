import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

function EditableTable() {
  const columnHeader = ["Name", "Age", "Gender", ""];
  const [data, setData] = useState([
    { name: "Anom", age: "19", gender: "Male" },
    { name: "Megha", age: "19", gender: "Female" },
    { name: "Subham", age: "25", gender: "Male" },
  ]);
  const [addDataState, setAddDataState] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
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
            {columnHeader.map((header, idx) => (
              <th style={{ padding: "12px 15px" }}>{header}</th>
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
