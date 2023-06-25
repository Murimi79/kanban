import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

export default function AddColumn() {
  const {
    palette: { secondary },
  } = useTheme();

  return (
    <Box sx={{ bgcolor: secondary.main, paddingY: 3, cursor: "pointer" }}>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center" }}
        variant="body1"
        color="primary.main"
      >
        Add Column
      </Typography>
    </Box>
  );
}
