import Grid from "@mui/material/Grid";

import Column from "../components/Column";
import AddColumn from "../components/AddColumn";

const columns = [
  { status: "To-Do" },
  { status: "In Development" },
  { status: "Ready for QA" },
  { status: "In Testing" },
];

export default function Kanban() {
  const noOfColumns = columns.length;

  return (
    <>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item sm={noOfColumns < 5 ? 9 : 12}>
          <Grid container spacing={2}>
            {columns.map(({ status }) => (
              <Grid key={status} item sm={12 / columns.length}>
                <Column status={status} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {noOfColumns < 5 ? (
          <Grid item sm={3}>
            <AddColumn />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
