import React from "react";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CreatePatient = () => {
  const [gender, setGender] = React.useState("");

  const genderhandleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="createPatient">
      <div className="createPatientWrapper">
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </Box>

        <Box sx={{ maxWidth: 300, mb: 3 }}>
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

        <Box sx={{ maxWidth: 300, mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Maritual Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={genderhandleChange}
            >
              <MenuItem value={1}>Singel</MenuItem>
              <MenuItem value={2}>Married</MenuItem>
              <MenuItem value={3}>Not Answerd</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />
        </Box>

        <Box sx={{ mb: 3 }}></Box>
      </div>
    </div>
  );
};

export default CreatePatient;
