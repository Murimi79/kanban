import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import AddForm from "./common/AddForm";
import { Column, addColumn } from "../features/columnSlice";
import { useAppDispatch } from "../hooks";
import { generateUniqueId } from "../utility";

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
  const dispatch = useAppDispatch();

  function handleAdd() {
    setAdding(true);
    setError({ ...error, show: false, message: "" });
  }

  function handleSubmit() {
    const title = name.trim();
    if (!title) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    const exists = columns.find((c) => c.status === title);

    if (exists) {
      setError({ ...error, show: true, message: "Title already exists." });
      return;
    }

    const id = generateUniqueId();
    dispatch(addColumn({ status: name, id }));
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
