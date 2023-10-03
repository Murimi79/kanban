import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import AddCard from "./AddCard";
import ColumnHeader from "./ColumnHeader";
import Card from "./Card";
import { updateTaskColumn } from "../features/taskSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

interface ColumnProps {
  status: string;
  columnId: number;
}

export default function Column({ status, columnId }: ColumnProps) {
  const tasks = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  function handleDropCard(
    e: React.DragEvent<HTMLElement>,
    { status, columnId }: ColumnProps
  ) {
    const taskId = e.dataTransfer.getData("taskId");
    dispatch(updateTaskColumn({ taskId, status, columnId }));
  }

  function handleDragOver(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
  }

  const columnTasks = tasks.filter((t) => t.columnId === columnId);
  console.log(tasks);

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        borderRadius: 1,
        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.1)}`,
      }}
    >
      <ColumnHeader columnId={columnId} status={status} />
      <Divider />
      <Box
        onDrop={(event) => handleDropCard(event, { status, columnId })}
        onDragOver={handleDragOver}
        sx={{ height: columnTasks.length ? "auto" : 60, padding: 2 }}
      >
        {columnTasks.map((task) => (
          <Card key={task.id} title="" {...task} />
        ))}
      </Box>
      <Divider />
      <AddCard columnId={columnId} status={status} />
    </Box>
  );
}
