import { Grid2, List } from "@mui/material";
import ActivityList from "./activity.list";
import ActivityDetails from "../details/activity.details";
import CreateActivityForm from "../form/create-activity.form";
type Props = {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  handleCancelSelectActivity: () => void;
  selectedActivity?: Activity;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
};
export default function ActivityDashboard({
  activities,
  handleSelectActivity,
  handleCancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
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
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            openForm={openForm}
          />
        )}

        {editMode && (
          <CreateActivityForm
            key={selectedActivity?.id ?? "create"}
            closeForm={closeForm}
            activity={selectedActivity}
            editMode={editMode}
          />
        )}
      </Grid2>
    </Grid2>
  );
}
