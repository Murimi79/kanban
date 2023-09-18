import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Card.scss";

interface Props {
  title: string;
  id: number;
}

export default function Card({ id, title }: Props) {
  function handleDragCard(e: any, taskId: number) {
    e.dataTransfer.setData("taskId", taskId);
  }

  return (
    <Box
      className="Card"
      draggable
      onDragStart={(event) => handleDragCard(event, id)}
    >
      <Typography sx={{ fontWeight: 500 }} variant="body1">
        {title}
      </Typography>
    </Box>
  );
}
