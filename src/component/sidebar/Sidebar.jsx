import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  AttachMoney,
  Assessment,
  Inventory2,
  MailOutline,
  Grading,
  ChatBubbleOutline,
  ManageAccounts,
  Report,
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
                Home
              </li>
            </Link>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Website</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item ">
                <PersonOutline className="sidebar-icon" />
                Users
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebar-list-item ">
                <Inventory2 className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-item ">
              <AttachMoney className="sidebar-icon" />
              Transaction
            </li>
            <li className="sidebar-list-item ">
              <Assessment className="sidebar-icon" />
              Assessment
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Patient Details</h3>
          <ul className="sidebar-list">
            <Link to="/patient/create" className="link">
              <li className="sidebar-list-item ">
                <MailOutline className="sidebar-icon" />
                Create Patient
              </li>
            </Link>

            <Link to="/patient/view" className="link">
              <li className="sidebar-list-item ">
                <Grading className="sidebar-icon" />
                Patient List
              </li>
            </Link>
            <Link to="/patient/catergory" className="link">
              <li className="sidebar-list-item ">
                <ChatBubbleOutline className="sidebar-icon" />
                Category
              </li>
            </Link>
            <Link to="/patient/deactiveAccount" className="link">
              <li className="sidebar-list-item ">
                <ChatBubbleOutline className="sidebar-icon" />
                Deactivate Accounts
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Inventory</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <ManageAccounts className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <Report className="sidebar-icon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Schedule</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Appoinment</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Employee</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Human Resorce</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Pathology</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Refer Manager</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Office Accounting</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Pathology Billing</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title"> Investigation Report</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Settings</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item ">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
