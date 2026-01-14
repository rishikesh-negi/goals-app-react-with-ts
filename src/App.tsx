import { useState } from "react";

import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import CourseGoalsList from "./components/CourseGoalsList.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      id: Date.now() + Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((goals) => [...goals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Image with your goals text" }}>
        <h1>Your React + TypeScript Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
