import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Card.scss";

export default function Card({ id, title, handleDragCard }) {
  return (
    <Box
      className="Card"
      draggable
      onDragStart={(event) => handleDragCard(event, id)}
    >
      <Typography sx={{ fontWeight: 500 }} variant="body1">
        {title}
      </Typography>
    </Box>
  );
}
