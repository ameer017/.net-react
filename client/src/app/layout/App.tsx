import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar.layout";
import ActivityDashboard from "../../features/activities/dashboard/activity.dashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchActivities = async () => {
    const response = await axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));

    return response;
  };
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h3">Reactivities</Typography>
        <ActivityDashboard activities={activities} />
      </Container>
    </Box>
  );
}

export default App;
