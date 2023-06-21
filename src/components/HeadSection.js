import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function HeadSection() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography sx={{ mb: 1 }} variant="h4">
        Kanban
      </Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="text.primary" href="/">
          Dashboard
        </Link>
        <Typography color="inherit">Kanban</Typography>
      </Breadcrumbs>
    </Box>
  );
}
