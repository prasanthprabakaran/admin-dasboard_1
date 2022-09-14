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
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ width: show ? '200px' : '100px'}} className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <LogoDevIcon />
          </span>
        </Link>
      </div>
      <hr />
      <div className={show ? 'center' : 'center-after'}>
        <ul>
          <li className={show ? 'list-toggle-before' : 'list-toggle-after'}>
            <DashboardIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Dashboard</span>
          </li>
          <hr />
          <p className="sidebar-title">INTERFACE</p>
          <li className={show ? 'list-toggle-before' : 'list-toggle-after'}>
            <SettingsIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Components</span>
          </li>
          <li className={show? 'list-toggle-before' : 'list-toggle-after'}>
            <BuildIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Utilities</span>
          </li>
          <hr />
          <p className="sidebar-title">ADDONS</p>
          <li className={show? 'list-toggle-before' : 'list-toggle-after'}>
            <FolderIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Pages</span>
          </li>
          <li className={show? 'list-toggle-before' : 'list-toggle-after'}>
            <BarChartIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Charts</span>
          </li>
          <li className={show? 'list-toggle-before' : 'list-toggle-after'}>
            <TableViewIcon className="icon" />
            <span className={show ? 'span-before' : 'span-after'}>Tables</span>
          </li>
        </ul>
      </div>
      <hr />

      <div className="bottom">
        <button
          className="sidebar-toggle"
          aria-label="switch"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <KeyboardArrowLeftIcon className="icon" id="arrow" />
          ) : (
            <KeyboardArrowRightIcon className="icon" id="arrow" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
