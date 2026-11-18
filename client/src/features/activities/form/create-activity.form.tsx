import { Box, Button, Paper, TextField, Typography } from "@mui/material";
type Props = {
  closeForm: () => void;
  activity?: Activity;
};
export default function CreateActivityForm({ closeForm, activity }: Props) {
  return (
    <Paper sx={{ borderRadius: 3, p: 2 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>

      <Box component="form" display="flex" flexDirection="column" gap={3}>
        <TextField label="Title" variant="outlined" value={activity?.title} />
        <TextField label="Description" multiline rows={3} />
        <TextField label="Category" variant="outlined" />
        <TextField label="Date" variant="outlined" type="date" />
        <TextField label="City" variant="outlined" />
        <TextField label="Venue" variant="outlined" />

        <Box display="flex" justifyContent="end">
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
