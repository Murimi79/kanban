import { useState } from "react";
import Grid from "@mui/material/Grid";

import Column from "../components/Column";
import AddColumn from "../components/AddColumn";

export default function Kanban() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    const id = tasks.length + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }

  function handleDragCard(e, taskId) {
    e.dataTransfer.setData("taskId", taskId);
  }

  function handleDropCard(e, { status, columnId }) {
    const taskId = e.dataTransfer.getData("taskId");
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

  function handleClear(columnId) {
    const updatedTasks = tasks.filter((t) => t.columnId !== columnId);
    setTasks(updatedTasks);
  }

  function handleDeleteColumn(columnId) {
    const newColumns = columns.filter((c) => c.id !== columnId);
    setColumns(newColumns);
    handleClear(columnId);
  }

  const noOfColumns = columns.length;

  return (
    <>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        {columns.map(({ status, id }) => (
          <Grid key={status} item sm={noOfColumns === 5 ? 2.4 : 2}>
            <Column
              tasks={tasks}
              status={status}
              columnId={id}
              handleDragCard={handleDragCard}
              handleDropCard={handleDropCard}
              handleAddTask={handleAddTask}
              handleUpdateColumn={handleUpdateColumn}
              handleClear={handleClear}
              handleDeleteColumn={handleDeleteColumn}
            />
          </Grid>
        ))}
        {noOfColumns < 5 ? (
          <Grid item sm={2}>
            <AddColumn handleAddColumn={handleAddColumn} />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
