import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar.layout";

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
    <>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h3">Reactivities</Typography>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
