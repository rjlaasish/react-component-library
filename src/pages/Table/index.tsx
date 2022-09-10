import React from "react";
import { Routes, Route } from "react-router-dom";

import EditableTable from "./EditableTable";

const Table = () => {
  return (
    <Routes>
      <Route path="/" element={<EditableTable />} />
      <Route path="/basic-table" element={<EditableTable />} />
    </Routes>
  );
};

export default Table;
