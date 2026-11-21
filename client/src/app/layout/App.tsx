import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar.layout";
import ActivityDashboard from "../../features/activities/dashboard/activity.dashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const fetchActivities = async () => {
    const response = await axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));

    return response;
  };
  useEffect(() => {
    fetchActivities();
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
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

  const handleSubmitForm = (activity: Activity) => {
    if (!activity.id) {
      const newActivity: Activity = {
        ...activity,
        id: crypto.randomUUID(),
      };
      setActivities((prev) => [...prev, newActivity]);
      setSelectedActivity(newActivity);
      return;
    }

    setActivities((prev) =>
      prev.map((item) => (item.id === activity.id ? activity : item)),
    );
    setSelectedActivity(activity);
  };


  const handleDelete = (id: string) => {
    setActivities(activities.filter(x => x.id !== id))
  }

  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h3">Reactivities</Typography>
        <ActivityDashboard
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          handleCancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;
