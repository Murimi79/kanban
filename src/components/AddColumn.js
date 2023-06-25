import { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddForm from "./common/AddForm";

export default function AddColumn({ handleAddColumn }) {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  function handleAdd() {
    setAdding(true);
  }

  function handleSubmit() {
    if (!name) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    handleAddColumn(name);
    setAdding(false);
    setName("");
  }

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        paddingY: 3,
        paddingX: 2,
        cursor: "pointer",
      }}
    >
      {!adding ? (
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          variant="body1"
          color="primary.main"
          onClick={handleAdd}
        >
          Add Column
        </Typography>
      ) : (
        <AddForm
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error.show}
          helperText={error.message}
          handleCancel={() => setAdding(false)}
          handleAdd={handleSubmit}
        />
      )}
    </Box>
  );
}
