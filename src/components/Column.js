import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import AddCard from "./AddCard";
import ColumnHeader from "./ColumnHeader";
import Card from "./Card";

export default function Column({ status }) {
  const [tasks, setTasks] = useState([
    { title: "Create a reusable button component", status: "To-Do" },
  ]);
  const columnTasks = tasks.filter((t) => t.status === status);

  function handleAddTask(title) {
    setTasks([...tasks, { title, status }]);
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
      <Box sx={{ height: columnTasks.length ? "auto" : 60, padding: 2 }}>
        {columnTasks.map((task) => (
          <Card key={task.title} {...task} />
        ))}
      </Box>
      <Divider />
      <AddCard handleAddTask={handleAddTask} />
    </Box>
  );
}
