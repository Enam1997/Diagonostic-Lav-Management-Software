import React from "react";
import "./patientDetails.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CreatePatient from "./patientDetailsComponent/createPatient/CreatePatient";

const PatientDetails = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="patientDetails">
      <Box sx={{ typography: "body1" }}>
        <div>PAtient Detais</div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Create Patient" value="1" />
              <Tab label="Patient List" value="2" />
              <Tab label="Category" value="3" />
              <Tab label="Deactivate Accounts" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CreatePatient />
          </TabPanel>
          <TabPanel value="2">Patient List</TabPanel>
          <TabPanel value="3">Category</TabPanel>
          <TabPanel value="4">Deactivate Accounts</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default PatientDetails;
