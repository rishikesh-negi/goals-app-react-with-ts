import type { CourseGoal as CourseGoalType } from "../App";

import CourseGoal from "./CourseGoal";

type CourseGoalsListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

export default function CourseGoalsList({
  goals,
  onDelete,
}: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
