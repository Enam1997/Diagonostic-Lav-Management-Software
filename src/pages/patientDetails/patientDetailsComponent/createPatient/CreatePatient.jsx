import React from "react";
import TextField from "@mui/material/TextField";

import "./createPatient.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SaveButton from "../../../../component/saveButton/SaveButton";

const CreatePatient = () => {
  const [maritualStatus, setMaritualStatus] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [catrgory, setCategory] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");

  const maritualhandleChange = (event) => {
    setMaritualStatus(event.target.value);
  };
  const genderhandleChange = (event) => {
    setGender(event.target.value);
  };
  const categoryhandleChange = (event) => {
    setCategory(event.target.value);
  };
  const bloodGrouphandleChange = (event) => {
    setBloodGroup(event.target.value);
  };

  return (
    <div className="create-patient">
      <div className="create-patient-wrapper">
        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Box>
          </div>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Age"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Birthdate"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Maritual Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={maritualStatus}
                  label="Maritual"
                  onChange={maritualhandleChange}
                >
                  <MenuItem value={1}>Singel</MenuItem>
                  <MenuItem value={2}>Married</MenuItem>
                  <MenuItem value={3}>Divorce</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={genderhandleChange}
                >
                  <MenuItem value={1}>Female</MenuItem>
                  <MenuItem value={22}>Male</MenuItem>
                  <MenuItem value={3}>Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={catrgory}
                  label="Category "
                  onChange={categoryhandleChange}
                >
                  <MenuItem value={1}>Gynocology</MenuItem>
                  <MenuItem value={2}>Medicine</MenuItem>
                  <MenuItem value={3}>Nephrology</MenuItem>
                  <MenuItem value={3}>No Ans</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bloodGroup}
                  label="BloodGroup"
                  onChange={bloodGrouphandleChange}
                >
                  <MenuItem value={1}>Gynocology</MenuItem>
                  <MenuItem value={2}>Medicine</MenuItem>
                  <MenuItem value={3}>Nephrology</MenuItem>
                  <MenuItem value={3}>No Ans</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Blood Pressure"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Height"
                variant="outlined"
              />
            </Box>
          </div>

          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Weight"
                variant="outlined"
              />
            </Box>
          </div>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Box>
          </div>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Guardian"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Relitionship"
                variant="outlined"
              />
            </Box>
          </div>

          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Guardian Mobile Number"
                variant="outlined"
              />
            </Box>
          </div>
        </div>

        <div className="input-item">
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Adress"
              variant="outlined"
            />
          </Box>
        </div>

        <div className="input-container">
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="input-item">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Retype Password"
                variant="outlined"
              />
            </Box>
          </div>
        </div>
      </div>

      <SaveButton />
    </div>
  );
};

export default CreatePatient;
