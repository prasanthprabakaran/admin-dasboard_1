import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import "./home.css";
//Widget icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Widgets = [
  {
    id: "01",
    type: "EARNINGS(MONTHLY)",
    value: "$40,000",
    icon: <CalendarTodayIcon fontSize="large" />,
    color: "#4e73df",
    borderLeft: "0.25rem solid #4e73df",

  },
  {
    id: "02",
    type: "EARNINGS(ANNUAL)",
    value: "$215,000",
    icon: <AttachMoneyIcon fontSize="large" />,
    color: "#1cc88a",
    borderLeft: "0.25rem solid #1cc88a",
    style : {
      "color": "#1cc88a",
      borderLeft: "0.25rem solid #1cc88a",

    }
  },
  {
    id: "03",
    type: "TASKS",
    value: "50%",
    icon: <ListAltIcon fontSize="large" />,
    color: "#36b9cc",
    borderLeft: "0.25rem solid #36b9cc",

  },
  {
    id: "04",
    type: "PENDING REQUESTS",
    value: "18",
    icon: <QuestionAnswerIcon fontSize="large" />,
    color: "#f6c23e",
    borderLeft: "0.25rem solid #f6c23e",

  },
];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="container-fluid">
          <div className="container-heading">
            <h1>Dashboard</h1>
          </div>
          <div className="widgets">
            {Widgets.map((list) => {
              return <Widget key={list.id} list={list} />;
            })}
          </div>
          <div className="charts">
            <Chart title="Earnings Overview" aspect={2/1} />
            {/* <Chart title="12 Months" aspect={2/1} /> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
