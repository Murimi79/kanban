import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import AddButton from "./common/AddForm";
import { addTask } from "../features/taskSlice";

interface AddCardProps {
  status: string;
  columnId: number;
}

export default function AddCard({ status, columnId }: AddCardProps) {
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState({
    show: false,
    message: "",
  });
  const dispatch = useDispatch();

  function handleAddCard() {
    setAdding(true);
  }

  function handleSubmit() {
    if (!title.trim()) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    const task = { title, status, columnId };
    dispatch(addTask(task));
    setAdding(false);
    setTitle("");
  }

  return (
    <Box sx={{ padding: 2, cursor: "pointer" }}>
      {!adding ? (
        <Typography
          sx={{ textAlign: "center", fontWeight: 600 }}
          variant="body2"
          color="primary.main"
          onClick={handleAddCard}
        >
          Add Card
        </Typography>
      ) : (
        <AddButton
          fullWidth
          id="fullWidth"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          error={error.show}
          helperText={error.message}
          handleCancel={() => setAdding(false)}
          handleAdd={handleSubmit}
        />
      )}
    </Box>
  );
}
