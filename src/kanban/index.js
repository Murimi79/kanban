import { useState } from "react";
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
  const [tasks, setTasks] = useState([
    { id: 1, title: "Create a reusable button component", status: "To-Do" },
  ]);

  function handleAddTask(title, status) {
    setTasks([...tasks, { title, status }]);
  }

  function handleDragCard(e, taskId) {
    e.dataTransfer.setData("taskId", taskId);
  }

  function handleDropCard(e, status) {
    const taskId = e.dataTransfer.getData("taskId");
    console.log(taskId, status);
    const updatedTasks = tasks.map((t) => {
      if (t.id === +taskId) {
        return { ...t, status: status };
      }
      return t;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  const noOfColumns = columns.length;

  return (
    <>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item sm={noOfColumns < 5 ? 9 : 12}>
          <Grid container spacing={2}>
            {columns.map(({ status }) => (
              <Grid key={status} item sm={12 / columns.length}>
                <Column
                  tasks={tasks}
                  status={status}
                  handleDragCard={handleDragCard}
                  handleDropCard={handleDropCard}
                  handleAddTask={handleAddTask}
                />
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
