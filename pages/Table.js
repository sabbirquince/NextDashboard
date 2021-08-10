import React from "react";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export default function Table() {
  const Text = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#000",
    marginLeft: "30px",
    marginTop: "25px",
  }));

  return (
    <div>
      <Text variant="body1">This is table page dummy content.</Text>
    </div>
  );
}
