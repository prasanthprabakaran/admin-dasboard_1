import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableViewIcon from "@mui/icons-material/TableView";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <LogoDevIcon />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
        <li>
          <DashboardIcon className="icon"/>
          <span>Dashboard</span>
        </li>
        <hr />
        <p className="title">INTERFACE</p>
        <li>
          <SettingsIcon className="icon"/>
          <span>Components</span>
        </li><li>
          <BuildIcon className="icon"/>
          <span>Utilities</span>
        </li>
        <hr />
        <p className="title">ADDONS</p>
        <li>
          <FolderIcon className="icon"/>
          <span>Pages</span>
        </li><li>
          <BarChartIcon className="icon"/>
          <span>Charts</span>
        </li><li>
          <TableViewIcon className="icon"/>
          <span>Tables</span>
        </li>
        </ul>
      </div>
      <hr />

      <div className="bottom">
        <button className="sidebar-toggle">
          <KeyboardArrowLeftIcon className="icon" id="arrow"/>
        </button>
        
      </div>
    </div>
  );
};

export default Sidebar;
