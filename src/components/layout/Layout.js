import React from "react";
import styles from "./layout.module.css";
import SideBar from "../SideBar/SideBar";
import AppBar from "../AppBar/AppBar";
import { styled } from "@material-ui/core/styles";

const Main = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  flex: "1",
  minHeight: "100%",
}));

const MyContainer = styled("div")(({ theme }) => ({
  width: "1442px",
  display: "flex",
  margin: "0 auto",
}));

const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#000",
}));

const SideBarContainer = styled("div")(({ theme }) => ({
  flex: "0 0 120px",
  height: "inherit",
}));

export default function Layout({ children }) {
  return (
    <RootContainer>
      <MyContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>

        <Main>
          <AppBar />
          {children}
        </Main>
      </MyContainer>
    </RootContainer>
  );
}
