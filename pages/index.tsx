import * as React from "react";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyContainer = styled(Container)({
  maxWidth: "1442px",
  minHeight: "2069px",
});

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: theme.palette.grey[700],
}));

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Dashboard");
  }, []);

  return (
    <MyContainer maxWidth={false}>
      <Text variant="h1" align="center">
        Dashboard Project Homepage
      </Text>
    </MyContainer>
  );
}
