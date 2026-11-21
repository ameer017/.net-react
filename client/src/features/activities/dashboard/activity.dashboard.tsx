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
  deleteActivity: (id: string) => void;
};
export default function ActivityDashboard({
  activities,
  handleSelectActivity,
  handleCancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
  deleteActivity,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <List>
          <ActivityList
            activities={activities}
            handleSelectActivity={handleSelectActivity}
            deleteActivity={deleteActivity}
          />
        </List>
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
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
