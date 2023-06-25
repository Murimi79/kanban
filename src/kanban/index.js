import { useState } from "react";
import Grid from "@mui/material/Grid";

import Column from "../components/Column";
import AddColumn from "../components/AddColumn";

export default function Kanban() {
  const [columns, setColumns] = useState([
    { id: 1, status: "To-Do" },
    { id: 2, status: "In Development" },
    { id: 3, status: "Ready for QA" },
    { id: 4, status: "In Testing" },
  ]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create a reusable button component",
      status: "To-Do",
      columnId: 1,
    },
  ]);

  function handleAddTask(task) {
    const id = tasks.length + 1;
    const newTask = { ...task, id };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  function handleDragCard(e, taskId) {
    e.dataTransfer.setData("taskId", taskId);
  }

  function handleDropCard(e, { status, columnId }) {
    const taskId = e.dataTransfer.getData("taskId");
    console.log(taskId, status);
    const updatedTasks = tasks.map((t) => {
      if (t.id === +taskId) {
        return { ...t, status, columnId };
      }
      return t;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  function handleAddColumn(status) {
    setColumns([...columns, { status, id: columns.length + 1 }]);
  }

  function handleUpdateColumn(column) {
    console.log(column);
    const updatedColumns = columns.map((c) => {
      if (c.id === column.id) {
        return { ...c, status: column.status };
      }
      return c;
    });
    setColumns(updatedColumns);
  }

  const noOfColumns = columns.length;

  return (
    <>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item sm={noOfColumns < 5 ? 9 : 12}>
          <Grid container spacing={2}>
            {columns.map(({ status, id }) => (
              <Grid key={status} item sm={12 / columns.length}>
                <Column
                  tasks={tasks}
                  status={status}
                  columnId={id}
                  handleDragCard={handleDragCard}
                  handleDropCard={handleDropCard}
                  handleAddTask={handleAddTask}
                  handleUpdateColumn={handleUpdateColumn}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {noOfColumns < 5 ? (
          <Grid item sm={3}>
            <AddColumn handleAddColumn={handleAddColumn} />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
