import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Props {
  handleAdd: () => void;
  handleCancel: () => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  buttonName?: string;
  fullWidth?: boolean;
  id?: string;
  label?: string;
  variant?: TextFieldVariants;
}

export default function AddForm({
  handleAdd,
  handleCancel,
  buttonName = "Add",
  ...props
}: Props) {
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
          sx={{ fontWeight: "bold", alignSelf: "center", cursor: "pointer" }}
          variant="body1"
          color="primary.main"
          onClick={handleCancel}
        >
          Cancel
        </Typography>
        <Button variant="contained" onClick={handleAdd}>
          {buttonName}
        </Button>
      </Box>
    </Box>
  );
}
