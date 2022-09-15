import React from "react";
import { Routes, Route } from "react-router-dom";

import EditableTable from "./EditableTable";

const Table = () => {
  return (
    <Routes>
      <Route path="/editable-table" element={<EditableTable />} />
    </Routes>
  );
};

export default Table;
