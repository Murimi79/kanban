import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ColumnHeader({ status }) {
  return (
    <Box sx={{ padding: 2 }}>
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
    </Box>
  );
}
