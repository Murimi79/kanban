import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import Column from "../components/Column";
import AddColumn from "../components/AddColumn";
import { addColumn, deleteColumn, updateColumn } from "../features/columnSlice";
import { addTask, clearTasks, updateTaskColumn } from "../features/taskSlice";

export default function Kanban() {
  const columns = useSelector((state) => state.column);
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  function handleAddTask(task) {
    dispatch(addTask(task));
  }

  function handleDragCard(e, taskId) {
    e.dataTransfer.setData("taskId", taskId);
  }

  function handleDropCard(e, { status, columnId }) {
    const taskId = e.dataTransfer.getData("taskId");
    dispatch(updateTaskColumn({ taskId, status, columnId }));
  }

  function handleAddColumn(status) {
    dispatch(addColumn({ status, id: columns.length + 1 }));
  }

  function handleUpdateColumn(column) {
    dispatch(updateColumn(column));
  }

  function handleClear(columnId) {
    dispatch(clearTasks(columnId));
  }

  function handleDeleteColumn(columnId) {
    dispatch(deleteColumn(columnId));
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
