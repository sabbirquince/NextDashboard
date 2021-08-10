import React from "react";
import { dashboardData } from "../src/data/dashboardData";
import Grid from "@material-ui/core/Grid";
import CardDashboard from "../src/components/Card/CardDashboard";
import Head from "next/head";

export default function NewPage() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Grid container style={{ padding: "0 15px" }}>
        {dashboardData.map((each) => (
          <Grid key={each.id} item md={3}>
            <CardDashboard data={each} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
