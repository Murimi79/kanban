import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function AddCard({ handleAddTask }) {
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
    if (!title)
      setError({ ...error, show: true, message: "Title is required." });

    handleAddTask(title);
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
        <Box>
          <TextField
            fullWidth
            id="fullWidth"
            label="Title"
            variant="outlined"
            sx={{ mb: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={error.show}
            helperText={error.message}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontWeight: "bold", alignSelf: "center" }}
              variant="body1"
              color="primary.main"
              onClick={() => setAdding(false)}
            >
              Cancel
            </Typography>
            <Button variant="contained" onClick={handleSubmit}>
              Add
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
