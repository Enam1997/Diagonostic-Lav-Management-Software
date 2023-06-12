import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./patientCategory.css";
import SaveButton from "../../../../component/saveButton/SaveButton";
import CategoryList from "./categoryComponent/categoryList/CategoryList";

const PatientCategory = () => {
  return (
    <div className="catergory-container">
      <div className="category-inside-container create-category">
        <h3>Add Category</h3>
        <div className="category-main-content">
          <div>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
              />
            </Box>
          </div>

          <SaveButton />
        </div>
      </div>

      <div className="category-inside-container category-list">
        <h3>Category List</h3>
        <div className="category-main-content">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default PatientCategory;
