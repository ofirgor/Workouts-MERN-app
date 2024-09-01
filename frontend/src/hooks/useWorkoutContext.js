import { workoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(workoutContext);
  if (!context) {
    throw new Error(
      "useWorkoutContext must be used within a WorkoutContextProvider"
    );
  }
  return context;
};
