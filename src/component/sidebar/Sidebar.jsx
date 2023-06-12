import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  PersonOutline,
  MailOutline,
  ManageAccounts,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-item  active">
                <LineStyle className="sidebar-icon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Website</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item ">
                <PersonOutline className="sidebar-icon" />
                Website
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Patient Details</h3>
          <ul className="sidebar-list">
            <Link to="/patient/create" className="link">
              <li className="sidebar-list-item ">
                <MailOutline className="sidebar-icon" />
                Patient
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Inventory</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <ManageAccounts className="sidebar-icon" />
              Inventory
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Schedule</h3>
          <ul className="sidebar-list">
            <Link to="/schedule" className="link">
              <li className="sidebar-list-item ">
                <LineStyle className="sidebar-icon" />
                Schedule
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Appoinment</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Appoinment
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Employee</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Employee
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Human Resorce</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Human Resorce
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Pathology</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Pathology
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Refer Manager</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Refer Manager
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Office Accounting</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Office Accounting
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Pathology Billing</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Pathology Billing
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title"> Investigation Report</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Investigation Report
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Settings</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
