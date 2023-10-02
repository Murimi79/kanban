import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddForm from "./common/AddForm";
import { useDispatch } from "react-redux";
import { Column, addColumn } from "../features/columnSlice";

interface Props {
  columns: Array<Column>;
}

export default function AddColumn({ columns }: Props) {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });
  const dispatch = useDispatch();

  function handleAdd() {
    setAdding(true);
  }

  function handleSubmit() {
    const title = name.trim();
    if (!title) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    dispatch(addColumn({ status: name, id: columns.length + 1 }));
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
