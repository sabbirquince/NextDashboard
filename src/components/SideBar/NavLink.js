import React from "react";
import { makeStyles, styled } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import myTheme from "../../theme";
import Link from "next/link";

const LinkContainer = styled("div")(({ theme }) => ({}));

const Text = styled(Typography)({
  color: "#EEEEEE",
  fontWeight: "300",
  fontSize: "14px",
});

const Icon = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "7px",
});

const TitleBox = styled("div")({
  display: "block",
  height: "19px",
});

export default function NavLink({ data, active }) {
  return (
    <Link href={`${data.route}`}>
      <LinkContainer>
        <Icon>{data.icon}</Icon>

        <TitleBox>
          <Text variant="h6" component="h3" align="center">
            {data.id === active && data.title}
          </Text>
        </TitleBox>
      </LinkContainer>
    </Link>
  );
}
