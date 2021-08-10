import { ClassNames } from "@emotion/react";
import { makeStyles, styled } from "@material-ui/styles";
import React from "react";
import NavLink from "./NavLink";
import { navigationData } from "../../data/navigationData";
import myTheme from "../../theme";
import { Typography } from "@material-ui/core";
import { useState } from "react";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: myTheme.palette.primary.main,
  height: "100%",
}));

const Text = styled(Typography)({
  color: "#FFFFFF",
  fontWeight: "700",
  fontSize: "30px",
  marginTop: "35px",
  marginBottom: "37.5px",
});

const MyLink = styled("div")(({ theme }) => ({
  width: "94px",
  marginBottom: "20px",
  borderRadius: "5px",
  padding: "10px",

  "&:hover": {
    backgroundColor: myTheme.palette.primary.light,
    cursor: "pointer",
  },
}));

const useStyles = makeStyles({
  active: {
    backgroundColor: myTheme.palette.primary.light,
  },
});

export default function SideBar() {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Container>
      <Text variant="h6" component="h1">
        Gull
      </Text>

      <MyLink
        onClick={() => setActive(0)}
        className={active === 0 && classes.active}
      >
        <NavLink active={active} data={navigationData[0]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(1)}
        className={active === 1 && classes.active}
      >
        <NavLink active={active} data={navigationData[1]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(2)}
        className={active === 2 && classes.active}
      >
        <NavLink active={active} data={navigationData[2]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(3)}
        className={active === 3 && classes.active}
      >
        <NavLink active={active} data={navigationData[3]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(4)}
        className={active === 4 && classes.active}
      >
        <NavLink active={active} data={navigationData[4]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(5)}
        className={active === 5 && classes.active}
      >
        <NavLink active={active} o data={navigationData[5]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(6)}
        className={active === 6 && classes.active}
      >
        <NavLink active={active} data={navigationData[6]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(7)}
        className={active === 7 && classes.active}
      >
        <NavLink active={active} data={navigationData[7]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(8)}
        className={active === 8 && classes.active}
      >
        <NavLink active={active} data={navigationData[8]} />
      </MyLink>

      <MyLink
        onClick={() => setActive(9)}
        className={active === 9 && classes.active}
      >
        <NavLink active={active} data={navigationData[9]} />
      </MyLink>
    </Container>
  );
}
