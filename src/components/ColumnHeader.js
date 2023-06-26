import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import AddForm from "./common/AddForm";
import Menu from "./common/Menu";

export default function ColumnHeader({
  status,
  handleUpdateColumn,
  columnId,
  handleClear,
  handleDeleteColumn,
}) {
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState(status);
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  }

  function clear(columnId) {
    handleClear(columnId);
    setOpen(false);
  }

  function handleOption(option) {
    if (option === "Rename") {
      setEditing(true);
    } else if (option === "Clear") {
      clear(columnId);
    } else if (option === "Delete") {
      handleDeleteColumn(columnId);
    }
  }

  function handleUpdate() {
    if (!name) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    handleUpdateColumn({ status: name, id: columnId });
    setEditing(false);
    setOpen(false);
  }

  function handleCancel() {
    setEditing(false);
    setOpen(false);
  }

  return (
    <Box sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}>
      {!editing ? (
        <>
          <Typography
            sx={{
              display: "inline",
              fontSize: "1rem",
              fontWeight: 600,
              verticalAlign: "centre",
            }}
            variant="h6"
            color="primary.dark"
          >
            {status}
          </Typography>
          <MoreHorizIcon
            color="primary.dark"
            sx={{ cursor: "pointer" }}
            onClick={handleClick}
          />
          {open ? (
            <Menu open={open} anchorEl={anchorEl} onClick={handleOption} />
          ) : null}
        </>
      ) : (
        <AddForm
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error.show}
          helperText={error.message}
          handleCancel={handleCancel}
          handleAdd={handleUpdate}
          buttonName="Save"
        />
      )}
    </Box>
  );
}
