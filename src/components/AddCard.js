import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddButton from "./common/AddForm";

export default function AddCard({ handleAddTask, status }) {
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  function handleAddCard() {
    setAdding(true);
  }

  function handleSubmit() {
    if (!title) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    handleAddTask(title, status);
    setAdding(false);
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
          sx={{ mb: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={error.show}
          helperText={error.message}
          handleCancel={() => setAdding(false)}
          handleAdd={handleSubmit}
        />
      )}
    </Box>
  );
}
