import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Column({ status }) {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        bgcolor: palette.secondary.main,
        padding: 2,
        borderRadius: 1,
        boxShadow: `0 2px 6px ${palette.primary.dark}`,
      }}
    >
      <Box sx={{ borderBottom: `1px solid ${palette.primary.main}` }}>
        <Typography variant="h6">{status}</Typography>
      </Box>
      <Box sx={{ borderBottom: "1px solid primary.main" }}>
        <Typography variant="h6">{status}</Typography>
      </Box>
    </Box>
  );
}
