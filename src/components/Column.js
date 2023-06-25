import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import AddCard from "./AddCard";
import ColumnHeader from "./ColumnHeader";
import Card from "./Card";

export default function Column({
  status,
  tasks,
  handleDropCard,
  handleDragCard,
  handleAddTask,
}) {
  const columnTasks = tasks.filter((t) => t.status === status);

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        borderRadius: 1,
        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.1)}`,
      }}
    >
      <ColumnHeader status={status} />
      <Divider />
      <Box
        onDrop={(event) => handleDropCard(event, status)}
        onDragOver={handleDragOver}
        sx={{ height: columnTasks.length ? "auto" : 60, padding: 2 }}
      >
        {columnTasks.map((task) => (
          <Card key={task.id} handleDragCard={handleDragCard} {...task} />
        ))}
      </Box>
      <Divider />
      <AddCard status={status} handleAddTask={handleAddTask} />
    </Box>
  );
}
