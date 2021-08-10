import * as React from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import myTheme from "../../theme";
import Image from "next/image";
import profileImage from "../../images/front-view-man-looking-up-with-copy-space.jpg";
import { makeStyles } from "@material-ui/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  transition: "all .25s",
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "503px",
  height: "50px",
}));

const MyAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  height: "115px",
  display: "flex",
  justifyContent: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey.A700,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "403px",
    height: "35px",
  },
}));

const MyBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: 8,
    right: -3,
    top: -5,
  },
}));

const useStyles = makeStyles({
  img: {
    borderRadius: "18px",
  },
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#949494" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ArrowIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <MyBadge badgeContent={3} color="primary">
                <BellIcon />
              </MyBadge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Image
                src={profileImage}
                width={60}
                height={58}
                className={classes.img}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </MyAppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}

const MenuIcon = () => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 6.5H17" stroke="#663399" stroke-linecap="round" />
    <path d="M1 12.5H17" stroke="#663399" stroke-linecap="round" />
    <path d="M1 0.5H17" stroke="#663399" stroke-linecap="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.82955 2.11306C9.77348 2.11306 9.71689 2.09561 9.66876 2.05859L8.28403 0.999285V7.60331H15.1343L14.0742 6.21859C13.9853 6.10222 14.0075 5.93667 14.1234 5.84781C14.2397 5.75895 14.4048 5.78116 14.4941 5.897L15.8789 7.70751C15.9513 7.80219 15.9524 7.93389 15.8789 8.02857L14.4941 9.83908C14.4428 9.90678 14.3635 9.94328 14.2847 9.94328C14.2286 9.94328 14.172 9.92583 14.1239 9.88827C14.007 9.79941 13.9853 9.63333 14.0736 9.51749L15.1342 8.13224H8.28403V15.1347L9.66982 14.0742C9.78618 13.9853 9.95173 14.0081 10.0406 14.1234C10.1295 14.2397 10.1072 14.4053 9.9914 14.4942L8.18089 15.8794C8.13223 15.9164 8.07616 15.9339 8.01957 15.9339C7.96297 15.9339 7.90638 15.9164 7.85877 15.8794L6.04879 14.4942C5.93243 14.4058 5.91074 14.2397 5.9996 14.1234C6.08793 14.007 6.25401 13.9843 6.37038 14.0742L7.7551 15.1339V8.13224H0.997956L2.05858 9.51855C2.14743 9.63439 2.12522 9.80047 2.00939 9.88933C1.96125 9.92583 1.90466 9.94328 1.84859 9.94328C1.76925 9.94328 1.69044 9.90784 1.63861 9.83961L0.253352 8.0291C0.18036 7.93442 0.18036 7.80272 0.253352 7.70804L1.63861 5.89753C1.72747 5.78169 1.89302 5.75948 2.00939 5.84834C2.12522 5.9372 2.14743 6.10275 2.05858 6.21911L0.998895 7.60331H7.7551V0.998476L6.36932 2.05859C6.25348 2.14745 6.0874 2.12523 5.99854 2.0094C5.90968 1.89356 5.9319 1.72748 6.04773 1.63862L7.85772 0.252833C7.95292 0.180371 8.0841 0.180371 8.1793 0.252833L9.98981 1.63862C10.1056 1.72695 10.1279 1.89303 10.0385 2.0094C9.98823 2.0771 9.90889 2.11306 9.82955 2.11306Z"
      fill="#663399"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.01827 1.76779C5.94768 1.62247 5.90807 1.45944 5.90807 1.28735C5.90807 0.678979 6.40315 0.183899 7.01152 0.183899C7.62007 0.183899 8.11496 0.678979 8.11496 1.28735C8.11496 1.45944 8.07536 1.62247 8.00479 1.7678C9.96211 2.21945 11.4253 3.97619 11.4253 6.06896V10.4827C11.4253 13.4525 12.1462 14.8965 13.6322 14.8965C13.8345 14.8965 14 15.0613 14 15.2644C14 15.4674 13.8345 15.6322 13.6322 15.6322H9.56005C9.3811 16.8785 8.30661 17.8391 7.01152 17.8391C5.71659 17.8391 4.64196 16.8785 4.46299 15.6322H0.390826C0.188527 15.6322 0.0230103 15.4674 0.0230103 15.2644C0.0230103 15.0613 0.188527 14.8965 0.390826 14.8965C1.8768 14.8965 2.59772 13.4525 2.59772 10.4827V6.06896C2.59772 3.97618 4.06093 2.21943 6.01827 1.76779ZM7.01152 2.3908C4.98338 2.3908 3.33335 4.04082 3.33335 6.06896V10.4827C3.33335 11.4089 3.33335 13.7092 2.20342 14.8965L4.80462 14.8965H9.21841L11.8198 14.8965C10.6897 13.7092 10.6897 11.4089 10.6897 10.4827V6.06896C10.6897 4.04082 9.03947 2.3908 7.01152 2.3908ZM7.01152 1.65516C7.21381 1.65516 7.37933 1.48965 7.37933 1.28735C7.37933 1.08505 7.21381 0.919531 7.01152 0.919531C6.80922 0.919531 6.6437 1.08505 6.6437 1.28735C6.6437 1.48965 6.80922 1.65516 7.01152 1.65516ZM7.01152 17.1034C6.12361 17.1034 5.37988 16.471 5.20922 15.6322H8.81382C8.64315 16.471 7.89942 17.1034 7.01152 17.1034Z"
      fill="#663399"
    />
  </svg>
);
