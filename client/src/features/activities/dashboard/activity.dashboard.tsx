import { Grid2, List } from "@mui/material";
import ActivityList from "./activity.list";
import ActivityDetails from "../details/activity.details";
type Props = {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
  selectedActivity?: Activity;
};
export default function ActivityDashboard({
  activities,
  handleSelectActivity,
  handleCancelSelectActivity,
  selectedActivity,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <List>
          <ActivityList
            activities={activities}
            handleSelectActivity={handleSelectActivity}
          />
        </List>
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && (
          <ActivityDetails
            activity={selectedActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
          />
        )}
      </Grid2>
    </Grid2>
  );
}
