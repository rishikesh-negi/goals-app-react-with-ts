import type { CourseGoal as CourseGoalType } from "../App";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalsListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

export default function CourseGoalsList({
  goals,
  onDelete,
}: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You haven't added any goals yet. Start adding some! 🎯
      </InfoBox>
    );
  }

  return (
    <>
      {goals.length > 4 && (
        <InfoBox mode="warning" severity="medium">
          You've added one too many goals! Are you sure you're not biting more
          than you can chew? 🤔
        </InfoBox>
      )}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
