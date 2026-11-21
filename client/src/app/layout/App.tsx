import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./navbar.layout";
import ActivityDashboard from "../../features/activities/dashboard/activity.dashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (!id) handleCancelSelectActivity();
    if (id) handleSelectActivity(id);
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ bgcolor: "#eee", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h3">Reactivities</Typography>
        {!activities || isPending ? (
          <Typography> Loading.... </Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            handleSelectActivity={handleSelectActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
