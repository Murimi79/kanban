import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function HeadSection() {
  return (
    <Box>
      <Typography sx={{ mb: 1 }} variant="h4" color="primary.dark">
        Kanban
      </Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          sx={{ fontWeight: 500 }}
          color="primary.dark"
          href="/"
        >
          Dashboard
        </Link>
        <Typography color="inherit">Kanban</Typography>
      </Breadcrumbs>
    </Box>
  );
}
