import React from "react";
import "./schedule.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ScheduleList from "./scheduleComponents/scheduleList/ScheduleList";
import CreateSchedule from "./scheduleComponents/createSchedule/CreateSchedule";

const Schedule = () => {
  const [value, setTab] = React.useState("1");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <div className="schedule">
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Schedule List" value="1" />
              <Tab label="Create Schedule" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="tav-container">
            <ScheduleList />
          </TabPanel>
          <TabPanel value="2" className="tav-container">
            <CreateSchedule />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Schedule;
