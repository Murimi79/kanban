import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Card.scss";

export default function Card({ title }) {
  return (
    <Box className="Card">
      <Typography sx={{ fontWeight: 500 }} variant="body1">
        {title}
      </Typography>
    </Box>
  );
}
