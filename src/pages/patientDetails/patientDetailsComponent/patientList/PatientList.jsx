import * as React from "react";
import { useState } from "react";
import "./patientList.css";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

import { allPatientList } from "../../../../fakeData/patentData.js";
import EditButton from "../../../../component/editButton/EditButton";
import DeleteButton from "../../../../component/deleteButton/DeleteButton";

const PatientList = () => {
  const [patientData, setData] = useState(allPatientList);
  const handleDelete = (id) => {
    setData(patientData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "photo", headerName: "Photo", width: 90 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    { field: "gender", headerName: "Gender", width: 80 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "guardian", headerName: "Guardian", width: 150 },
    { field: "bloodGroup", headerName: "Blood Group", width: 70 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "mobileNo", headerName: "Mobile No", width: 150 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <EditButton />
            </Link>

            <DeleteButton onClick={() => handleDelete(params.row.id)} />

            {/* <DeleteOutline
              className="userDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];
  return (
    <div>
      <DataGrid
        rows={patientData}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 50]}
        // checkboxSelection
      />
    </div>
  );
};

export default PatientList;
