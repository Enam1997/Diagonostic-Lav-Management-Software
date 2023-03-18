import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./topbar.css";

// Componet Test Dependencies
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import QuickAcess from "./QuickAcess";

// -------------------------------------------------------------------

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DLav</span>
        </div>
        <div className="topMiddle">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Patient"
              inputProps={{ "aria-label": "search patient" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* Add quick acces menu */}
          <div className="quicAcessButton">
            <QuickAcess />
          </div>

          {/* End Qick Access */}
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Language />
          </div>

          <div className="topbarIconsContainer">
            <Settings />
          </div>
          {/* Component testing */}

          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="topAvatar"
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          {/*  Component over*/}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
