import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface MenuProps {
  open: boolean;
  onClick: 
}

export default function Menu({ open, anchorEl, onClick }: MenuProps) {
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const options = ["Rename", "Clear", "Delete"];

  return (
    <Popper id={id} open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper elevation={3}>
            <nav aria-label="main mailbox folders">
              <List>
                {options.map((o) => (
                  <ListItem key={o} disablePadding>
                    <ListItemButton onClick={() => onClick(o)}>
                      <ListItemText primary={o} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}
