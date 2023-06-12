import React from "react";
import "./patientDetails.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CreatePatient from "./patientDetailsComponent/createPatient/CreatePatient";
import PatientList from "./patientDetailsComponent/patientList/PatientList";
import PatientCategory from "./patientDetailsComponent/category/PatientCategory";
import DeactivateAccount from "./patientDetailsComponent/deactivateAccount/DeactivateAccount";

const PatientDetails = () => {
  const [value, setTab] = React.useState("1");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="patient-details">
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Create Patient" value="1" />
              <Tab label="Patient List" value="2" />
              <Tab label="Category" value="3" />
              <Tab label="Deactivate Accounts" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1" className="tav-container">
            <CreatePatient />
          </TabPanel>
          <TabPanel value="2" className="tav-container">
            <PatientList />
          </TabPanel>
          <TabPanel value="3">
            <PatientCategory />
          </TabPanel>
          <TabPanel value="4">
            <DeactivateAccount />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default PatientDetails;
