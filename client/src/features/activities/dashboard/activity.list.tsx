import { Box } from "@mui/material";
import ActivityCard from "./activity.card";

type Props = {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};
export default function ActivityList({
  activities,
  handleSelectActivity,
  deleteActivity,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          deleteActivity={deleteActivity}
          handleSelectActivity={handleSelectActivity}
        />
      ))}
    </Box>
  );
}
