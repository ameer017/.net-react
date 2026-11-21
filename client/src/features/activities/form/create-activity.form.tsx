import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { type FormEvent } from "react";
type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
  editMode: boolean;
};
export default function CreateActivityForm({
  closeForm,
  activity,
  submitForm,
  editMode,
}: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) data.id = activity.id;

    submitForm(data as unknown as Activity);

    closeForm();
  };

  return (
    <Paper sx={{ borderRadius: 3, p: 2 }}>
      {editMode ? (
        <Typography variant="h5" gutterBottom color="primary">
          Edit Activity
        </Typography>
      ) : (
        <Typography variant="h5" gutterBottom color="primary">
          Create Activity
        </Typography>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={activity?.title}
          name="title"
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          value={activity?.description}
          name="description"
        />
        <TextField
          label="Category"
          variant="outlined"
          value={activity?.category}
          name="category"
        />
        <TextField
          label="Date"
          variant="outlined"
          type="date"
          value={activity?.date}
          name="date"
        />
        <TextField
          label="City"
          variant="outlined"
          value={activity?.city}
          name="city"
        />
        <TextField
          label="Venue"
          variant="outlined"
          value={activity?.venue}
          name="venue"
        />

        <Box display="flex" justifyContent="end">
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button color="success" variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
