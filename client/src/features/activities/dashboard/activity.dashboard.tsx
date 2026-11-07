import { Grid2, List } from "@mui/material";
import ActivityList from "./activity.list";
type Props = {
  activities: Activity[];
};
export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid2 container>
      <Grid2 size={9}>
        <List>
          <ActivityList activities={activities} />
        </List>
      </Grid2>
    </Grid2>
  );
}
