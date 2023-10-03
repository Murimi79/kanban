import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import AddForm from "./common/AddForm";
import Menu from "./common/Menu";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteColumn, updateColumn } from "../features/columnSlice";
import { clearTasks } from "../features/taskSlice";

interface Props {
  status: string;
  columnId: string;
}

export default function ColumnHeader({ status, columnId }: Props) {
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const [name, setName] = useState(status);
  const [error, setError] = useState({
    show: false,
    message: "",
  });
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.column);

  function handleClick(e: React.MouseEvent<SVGSVGElement | null>) {
    setAnchorEl(e.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  }

  function clear(columnId: string) {
    dispatch(clearTasks(columnId));
    setOpen(false);
  }

  function handleOption(option: string) {
    if (option === "Rename") {
      setEditing(true);
    } else if (option === "Clear") {
      clear(columnId);
    } else if (option === "Delete") {
      dispatch(deleteColumn(columnId));
      clear(columnId);
    }
  }

  function handleUpdate() {
    const title = name.trim();
    if (!title) {
      setError({ ...error, show: true, message: "Title is required." });
      return;
    }

    const exists = columns.find((c) => c.id !== columnId && c.status === name);
    if (exists) {
      setError({ ...error, show: true, message: "Title already exists." });
      return;
    }

    dispatch(updateColumn({ status: name, id: columnId }));
    setEditing(false);
    setOpen(false);
  }

  function handleCancel() {
    setEditing(false);
    setOpen(false);
    setName(status);
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
          <MoreHorizIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
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
