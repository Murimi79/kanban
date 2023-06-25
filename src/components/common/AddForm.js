import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function AddForm({ handleAdd, handleCancel, ...props }) {
  return (
    <Box>
      <TextField
        fullWidth
        id="fullWidth"
        label="Name"
        variant="outlined"
        sx={{ mb: 2 }}
        {...props}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ fontWeight: "bold", alignSelf: "center" }}
          variant="body1"
          color="primary.main"
          onClick={handleCancel}
        >
          Cancel
        </Typography>
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>
    </Box>
  );
}
