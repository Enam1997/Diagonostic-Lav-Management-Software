import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { allCategory } from "../../../../../../fakeData/categoryData";
import EditButton from "../../../../../../component/editButton/EditButton";
import DeleteButton from "../../../../../../component/deleteButton/DeleteButton";
import { DeleteOutline } from "@mui/icons-material";

import "./categoryList.css";

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState(allCategory);

  const handleDelete = (id) => {
    setCategoryData(categoryData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "categoryName", headerName: "Category name", width: 130 },
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
            <div onClick={() => handleDelete(params.row.id)}>
              <DeleteButton />
            </div>
            {/*  */}

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
        rows={categoryData}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default CategoryList;
