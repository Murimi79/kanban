import { Grid } from "@mui/material";
import Column from "../components/Column";

export default function Kanban() {
  return (
    <Grid sx={{ mt: 7 }} container spacing={1}>
      <Grid item sm={4}>
        <Column status="To-Do" />
      </Grid>
      <Grid item sm={4}>
        <Column status="In progress" />
      </Grid>
      <Grid item sm={4}>
        <Column status="Done" />
      </Grid>
    </Grid>
  );
}
