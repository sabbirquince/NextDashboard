import * as React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import myTheme from "../../theme";

export default function CardDashboard({ data }) {
  const MyCard = styled(Card)(({ theme }) => ({
    margin: "0 15px",
    boxShadow: "none",
    borderRadius: "24px",
  }));

  const MyCardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    padding: "29px 20px 31px",
  }));

  const MyCardChild1 = styled("div")(({ theme }) => ({
    width: "36px",
    height: "71px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "18px",
    backgroundColor:
      data.palette === "primary"
        ? "#F2F1FE"
        : data.palette === "info"
        ? theme.palette.info.light
        : data.palette === "success"
        ? theme.palette.success.light
        : theme.palette.warning.light,
  }));

  const MyCardChild2 = styled("div")(({ theme }) => ({
    padding: "0 10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }));

  const TitleText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    lineHeight: "19px",
    color: theme.palette.grey.A400,
  }));

  const DetailsText = styled(Typography)(({ theme }) => ({
    fontsize: "30px",
    lineHeight: "41px",
    fontWeight: "700",
    color:
      data.palette === "primary"
        ? theme.palette.primary.main
        : data.palette === "info"
        ? theme.palette.info.main
        : data.palette === "success"
        ? theme.palette.success.main
        : theme.palette.warning.main,
  }));

  return (
    <MyCard>
      <MyCardContainer>
        <MyCardChild1>{data.icon}</MyCardChild1>

        <MyCardChild2>
          <TitleText variant="body1" component="h4">
            {data.title}
          </TitleText>

          <DetailsText variant="h4" component="h2">
            {data.details}
          </DetailsText>
        </MyCardChild2>
      </MyCardContainer>
    </MyCard>
  );
}
