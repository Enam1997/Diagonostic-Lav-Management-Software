import React from "react";
import "./scheduleList.css";

import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

import { allScheduleList } from "../../../../fakeData/scheduleData";
import EditButton from "../../../../component/editButton/EditButton";

const ScheduleList = () => {
  const [scheduleData, setData] = useState(allScheduleList);
  const handleDelete = (id) => {
    setData(scheduleData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "photo", headerName: "Photo", width: 90 },
    { field: "doctor", headerName: "Doctor", width: 150 },
    {
      field: "consultationFees",
      headerName: "Consultation Fees",
      type: "number",
      width: 150,
    },
    { field: "weekday", headerName: "Weekday", width: 140 },
    { field: "timeStart", headerName: "Time Start", width: 140 },
    { field: "timeEnd", headerName: "Time End", width: 140 },

    {
      field: "perPatientDuration",
      headerName: "Per Patient Duration",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <EditButton />
            </Link>

            {/* <DeleteButton onClick={() => handleDelete(params.row.id)} /> */}

            <DeleteOutline
              className="userDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div>
      <DataGrid
        rows={scheduleData}
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

export default ScheduleList;
