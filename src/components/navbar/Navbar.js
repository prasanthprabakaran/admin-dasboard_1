import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, Button, IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="input-group">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="input-group-append">
            <Button className="search-button">
              <SearchOutlinedIcon />
            </Button>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <IconButton color="primary" aria-label="notify-button">
              <Badge badgeContent="3+" color="primary">
                <NotificationsIcon className="navbar-icon" />
              </Badge>
            </IconButton>
          </div>
          <div className="item">
            <IconButton color="primary" aria-label="mail-button">
              <Badge badgeContent="7" color="primary">
                <MailIcon className="navbar-icon" />
              </Badge>
            </IconButton>
          </div>
          <div className="vertical-hr"></div>
          <div className="item">
            <img
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Search Component

// import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));
// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// <Search>
// <StyledInputBase
//   placeholder="Search..."
//   inputProps={{ "aria-label": "search" }}
// />
// <SearchIconWrapper>
//   <SearchIcon />
// </SearchIconWrapper>
// </Search>
