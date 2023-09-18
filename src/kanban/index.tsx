import React from "react";
import Grid from "@mui/material/Grid";

import Column from "../components/Column";
import AddColumn from "../components/AddColumn";
import { useAppSelector } from "../hooks";

export default function Kanban() {
  const columns = useAppSelector((state) => state.column);

  const noOfColumns = columns.length;

  return (
    <>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        {columns.map(({ status, id }) => (
          <Grid key={status} item sm={noOfColumns === 5 ? 2.4 : 2}>
            <Column status={status} columnId={id} />
          </Grid>
        ))}
        {noOfColumns < 5 ? (
          <Grid item sm={2}>
            <AddColumn columns={columns} />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
